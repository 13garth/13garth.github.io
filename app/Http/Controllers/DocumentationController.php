<?php

namespace App\Http\Controllers;

use App\Models\User;
use ReflectionClass;
use Illuminate\Http\Request;
use Nette\Utils\ReflectionMethod;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\Container\BindingResolutionException;

class DocumentationController extends Controller
{
    // Add validation for user role. If user role is equal to 'admin', return the view. Else return a 403 error.
    public function __construct()
    {
        $this->middleware(function ($request, $next) {
            $user = auth()->user();
            if (!$user || $user->role !== 'admin') {
                abort(403, 'Unauthorized action.');
            }
            return $next($request);
        });
    }

    public function index()
    {
        $documentation = $this->system_integrations();

        return view('documentation', ['documentation' => $documentation]);
    }

    /**
     * @return View|Factory
     * @throws BindingResolutionException
     */
    private function system_integrations(): array
    {
        // use Illuminate\Contracts\View\View;
        // use Illuminate\Contracts\View\Factory;
        // use Illuminate\Contracts\Container\BindingResolutionException;
        // use ReflectionClass;
        // use Nette\Utils\ReflectionMethod;
        // use Illuminate\Support\Facades\Route;
        // use Illuminate\Support\Facades\File;

        $controllerDir = app_path('Http/Controllers');
        $controllers = File::allFiles($controllerDir);

        $documentation = [];

        foreach ($controllers as $controller) {
            $className = str_replace('.php', '', $controller->getFilename());
            $classNamespace = 'App\\Http\\Controllers\\' . $className;

            if (!class_exists($classNamespace)) {
                continue;
            }

            $reflectionClass = new ReflectionClass($classNamespace);
            $methods = $reflectionClass->getMethods(ReflectionMethod::IS_PUBLIC);

            foreach ($methods as $method) {
                if ($method->class == $classNamespace) { // Exclude inherited methods
                    $methodName = $method->getName();
                    $returnType = (string) $method->getReturnType();

                    $documentation[$className][$methodName] = [
                        'returnType' => $returnType,
                    ];
                }
            }
            $routes = Route::getRoutes();

            foreach ($routes as $route) {
                $action = $route->getAction();

                // Check if the route action is associated with a controller
                if (isset($action['controller'])) {
                    // Split the controller and method, check if both parts exist
                    $parts = explode('@', $action['controller']);
                    if (count($parts) === 2) {
                        [$controllerName, $methodName] = $parts;

                        // Check if this controller and method is what we are looking for
                        if ($controllerName == $classNamespace) {
                            $documentation[$className][$methodName]['routes'][] = [
                                'uri' => $route->uri(),
                                'methods' => $route->methods(),
                            ];
                        }
                    }
                }
            }
        }

        return $documentation;
    }
}
