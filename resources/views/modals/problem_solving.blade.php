<div class="row col-12 mx-auto p-0">
    <h1 class="text-white text-center">Problem Solving</h1>
    <hr class="text-white">
    <div class="card dark-blue-transparent-background text-white p-0 mb-3">
        <div class="row col-12 mx-auto p-2">
            <div class="col-md-2">
                <h3>Problem :</h3>
                Create an interactive interface to display seating data for system users to see data in
                a helpful way that
                enables management of guests seats.
            </div>
            <div class="col-md-10">
                <h3>Solution Process</h3>
                <ol>
                    <li>Understand the problem fully.</li>
                    <li>Lay out the potential solutions and problems.</li>
                    <li>Research each of the solutions and understand how they solve the problem at
                        hand.</li>
                    <li>
                        In this case one of the most effective solutions was to implement an HTML
                        Canvas.<br>
                        I needed a solution that was dynamic and able to adjust to various seating
                        plans.<br>
                        I created an html canvas that allowed a person to upload an image, in this case
                        it was
                        an image of a seating plan for a venue. <br>
                        Once a seating plan image was uploaded the interface allowed for drawing drag
                        and drop lines of markers onto the image. This turned a seating image into an
                        interactive
                        interface that tied data into the system. Giving complex sheets of data a simple
                        to use
                        interface making the job much easier.<br>
                        The interface for each of the seating plans was also designed to be adjusted for
                        specific
                        events and re-usable. Once a venue was setup it could be re-used to reduce the
                        need for
                        repetition. This solution was however highly customized. But was written in a
                        way that it
                        wouldn't need to be re-written and was created as an ad on library making it
                        very easy to
                        write ontop of. <br>
                        <img src="{{ asset('assets/seating-preview.png') }}" alt="Seating Preview" class="rounded"
                            style="max-width: 100%;">
                    </li>
                </ol>
            </div>
        </div>
    </div>
</div>
<div class="row col-12 mx-auto p-0">
    <div class="card dark-blue-transparent-background text-white p-0 mb-3">
        <div class="row col-12 mx-auto p-2">
            <div class="col-md-2">
                <h3>Problem :</h3>
                Create an interactive command prompt game of dominoes.
            </div>
            <div class="col-md-10">
                <h3>Solution Process</h3>
                <ol>
                    <li>Understand the problem fully.</li>
                    <li>Lay out the potential solutions and problems.</li>
                    <li>Research each of the solutions and understand how they solve the problem at
                        hand.</li>
                    <li>
                        In this case the problem at hand is fairly simple.<br>
                        Create an interactive game of dominoes. The rules differ slightly from the
                        original game.
                        But the rules are still very similar.<br>
                        So the first thing was to layout the pieces. Once I had the pieces I could get
                        to work on the logic.<br>
                        I created all the individual tiles for the dominoes in a php array. Then got to
                        work on applying
                        the game logic to run the game simulation.<br>
                        The only difference in rules essentially was that the board is linear. No up or
                        down You can add a
                        tile either to the righ or the left hand side of the board.<br>
                        First person to place all their tiles wins.
                        <div class="alert alert-info p-1">
                            Because this is a fairly simple solution you can actually run this file
                            yourself and see how I figured this out.
                        </div>
                    </li>
                </ol>
                <ul>
                    <li>
                        Download the php file. <br>
                        <a href="public\downloads\dominoes.php" download>
                            <button class="btn btn-success">Download</button>
                        </a>
                    </li>
                    <li>Open your terminal in the directory where you stored your download.</li>
                    <li>
                        In your terminal. Run these commands to run the game. (The php file must be in
                        the same directory for your terminal.)<br>
                        <strong>php dominoes.php</strong> and hit enter.<br>
                    </li>
                    <li>
                        The game will look something like this. But is different every time it run. As
                        any game should be.<br>
                        <img src="{{ asset('assets/dominoes-game.png') }}" alt="CMD Dominoes" class="rounded"
                            style="max-width: 100%;">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
