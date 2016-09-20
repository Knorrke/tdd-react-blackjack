import React from 'react';
import ReactDOM from 'react-dom';
import Player from './Player';
import Card from './Card';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

describe('BlackJack', () => {
	var player;

	beforeEach(function() {
		player = new Player();
	});

	it('counts correctly with numbers 2 and 3', () => {
		player.setCards(cards(['2','3']))
		expect(player.calculateValue()).toEqual(5);
	})

	it('counts correctly with numbers 5 and 10', () => {
		player.setCards(cards(['5','10']))
		expect(player.calculateValue()).toEqual(15);
	})

	it('counts correctly with more numbers', () => {
		player.setCards(cards(['2','3', '4']))
		expect(player.calculateValue()).toEqual(9)
	})

	it('returns the corresponding value of face cards', () => {
		expect(new Card('B').parseValue()).toEqual(10);
		expect(new Card('D').parseValue()).toEqual(10);
		expect(new Card('A').parseValue()).toEqual(1);
	})

	it('counts correctly with characters B and Q', () => {
		player.setCards(cards(['B','D']))
		expect(player.calculateValue()).toEqual(20);
	})

	it('chooses the right value for ten, five and ace', () => {
		player.setCards(cards(['10','5', 'A']))
		expect(player.calculateValue()).toEqual(16);
	})
	it('chooses the right value for ten, nine and ace', () => {
		player.setCards(cards(['10','9', 'A']))
		expect(player.calculateValue()).toEqual(20);
	})
	it('chooses the right value for B, 3, A and 2', () => {
		player.setCards(cards(['B','3', 'A', '2']))
		expect(player.calculateValue()).toEqual(16);
	})
	it('chooses the right value for ace, nine and five', () => {
		player.setCards(cards(['A','9', '5']))
		expect(player.calculateValue()).toEqual(15);
	})

	it('returns -1 when the total value surpasses 21', () => {
		player.setCards(cards(['10', 'K', '2']));
		expect(player.calculateValue()).toEqual(-1);
	})
})

function cards(arr) {
	return arr.map((val) => new Card(val));
}