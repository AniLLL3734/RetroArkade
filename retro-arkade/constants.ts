
import { Game, GameType } from './types';

export const GAMES: Game[] = [
  {
    id: 'bubble-shooter',
    name: 'Bubble Shooter',
    description: 'A classic puzzle game where you match and pop colorful bubbles to clear the board.',
    thumbnail: 'https://picsum.photos/seed/bubble/400/300',
    type: GameType.HTML5,
    path: '/games/bubble-shooter/', // Assumes an index.html inside this folder
    instructions: 'Use your mouse to aim and click to shoot a bubble. Match 3 or more of the same color to make them pop.',
    category: 'Puzzle',
    width: 800,
    height: 600,
  },
  {
    id: 'heli-attack',
    name: 'Heli Attack 2',
    description: 'An action-packed shooter where you fight off waves of attack helicopters.',
    thumbnail: 'https://picsum.photos/seed/heli/400/300',
    type: GameType.SWF,
    path: '/games/heli-attack-2.swf',
    instructions: 'Arrow Keys to move. A to shoot. S to jump.',
    category: 'Action',
    width: 640,
    height: 480,
  },
  {
    id: 'road-fury',
    name: 'Road Fury',
    description: 'A high-speed racing and shooting game. Upgrade your car and destroy your enemies on the road.',
    thumbnail: 'https://picsum.photos/seed/racing/400/300',
    type: GameType.HTML5,
    path: '/games/road-fury/',
    instructions: 'Use your mouse to steer your car. Click to shoot. Collect power-ups and cash for upgrades.',
    category: 'Racing',
    width: 800,
    height: 600,
  },
  {
    id: 'super-mario-63',
    name: 'Super Mario 63',
    description: 'A fantastic fan-made Mario game combining elements from Super Mario 64, Sunshine, and Galaxy.',
    thumbnail: 'https://picsum.photos/seed/mario/400/300',
    type: GameType.SWF,
    path: '/games/super-mario-63.swf',
    instructions: 'Arrow Keys to move. Z to jump, X to spin/talk, C to use FLUDD.',
    category: 'Classic',
    width: 700,
    height: 500,
  },
  {
    id: '2048',
    name: '2048',
    description: 'Slide numbered tiles to combine them and create a tile with the number 2048.',
    thumbnail: 'https://picsum.photos/seed/2048/400/300',
    type: GameType.HTML5,
    path: '/games/2048/',
    instructions: 'Use your Arrow Keys to move the tiles. When two tiles with the same number touch, they merge into one!',
    category: 'Puzzle',
    width: 500,
    height: 500,
  }
];
