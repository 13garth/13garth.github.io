<?php
	function dd($var){
		print_r($var);
	}

	$dominoes = [
		"0:0",
		"0:1","1:1",
		"0:2","1:2","2:2",
		"0:3","1:3","2:3","3:3",
		"0:4","1:4","2:4","3:4","4:4",
		"0:5","1:5","2:5","3:5","4:5","5:5",
		"0:6","1:6","2:6","3:6","4:6","5:6","6:6"
	];
	shuffle($dominoes);
	$players = ['Alice','Bob'];
	$player_dominoes = [];
	$game_index = [];
	$board = [];

	foreach ($players as $player) {
		array_push($game_index,[$player=>$player_dominoes]);
	}

	// Start Game
	$x = 0;
	for ($i=0; $i <= 6; $i++) {
		if ($i == 6) {
			$i = 0;
			$x++;
			$dominoes = array_values($dominoes);
		}
		$player = $players[$x];
		if ($x == count($game_index)) {
			$starting_tile = $dominoes[$i];
			array_push($board, $dominoes[$i]);
			unset($dominoes[$i]);
			$dominoes = array_values($dominoes);
			break;
		}
		array_push($game_index[$x][$player], $dominoes[$i]);
		unset($dominoes[$i]);
		$dominoes = array_values($dominoes);
	}

	echo "Game starting with dominoe <".$board[0].">\n";
		do{
			foreach ($players as $player_key => $player) {
					foreach ($game_index[$player_key][$player] as $key => $player_dominoe) {
						$option_1 = $board[0][0];
						$option_2 = end($board)[2];
						$option_1_dominoe = $board[0];
						$option_2_dominoe = end($board);

						if ($player_dominoe[0] == $option_1) {
							echo "\n".$player." plays <".$player_dominoe."> to connect to <".$option_1_dominoe.">";
							array_unshift($board, strrev($player_dominoe));
							unset($game_index[$player_key][$player][$key]);
							array_values($game_index[$player_key][$player]);
							echo "\nBoard is now ";
							foreach ($board as $board_dominoe) {
								echo "<".$board_dominoe.">";
							}
							break;
						}elseif ($player_dominoe[0] == $option_2) {
							echo "\n".$player." plays <".$player_dominoe."> to connect to <".$option_2_dominoe.">";
							array_push($board, $player_dominoe);
							unset($game_index[$player_key][$player][$key]);
							array_values($game_index[$player_key][$player]);
							echo "\nBoard is now ";
							foreach ($board as $board_dominoe) {
								echo "<".$board_dominoe.">";
							}
							break;
						}elseif ($player_dominoe[2] == $option_1) {
							echo "\n".$player." plays <".$player_dominoe."> to connect to <".$option_1_dominoe.">";
							array_unshift($board, $player_dominoe);
							unset($game_index[$player_key][$player][$key]);
							array_values($game_index[$player_key][$player]);
							echo "\nBoard is now ";
							foreach ($board as $board_dominoe) {
								echo "<".$board_dominoe.">";
							}
							break;
						}elseif ($player_dominoe[2] == $option_2) {
							echo "\n".$player." plays <".$player_dominoe."> to connect to <".$option_2_dominoe.">";
							array_push($board, strrev($player_dominoe));
							unset($game_index[$player_key][$player][$key]);
							array_values($game_index[$player_key][$player]);
							echo "\nBoard is now ";
							foreach ($board as $board_dominoe) {
								echo "<".$board_dominoe.">";
							}
							break;
						}elseif(!empty($dominoes)) {
							$fetch_rand_dominoe = array_rand($dominoes,1);
							$selected_dominoe = $dominoes[$fetch_rand_dominoe];
							array_push($game_index[$player_key][$player], $selected_dominoe);
							unset($dominoes[$fetch_rand_dominoe]);
							array_values($game_index[$player_key][$player]);
							echo "\n".$player." cannot play, ".$player." picks up dominoe ".$selected_dominoe;
							echo "\nBoard is now ";
							foreach ($board as $board_dominoe) {
								echo "<".$board_dominoe.">";
							}
						}
					}
					if (empty($game_index[$player_key][$player])) {
						echo "\n".$player." Wins\n";
						die();
					}
				}
			} while(!empty($game_index[$player_key][$player]));
			// } while(!empty($game_index));
?>
