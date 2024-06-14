import { describe, it, expect, beforeEach } from '@jest/globals';
import Book from '../book.js';

describe('Book', () => {
  let myBook;

  beforeEach(() => {
    myBook = new Book('Cuentos de la Selva', 'Horacio Quiroga', 350, 1000); 
  });

  it('return the correct title', () => {
    expect(myBook.getTitle()).toBe('Cuentos de la Selva');
  });

  it('return the correct author', () => {
    expect(myBook.getAuthor()).toBe('Horacio Quiroga');
  });

  it('return the correct number of pages', () => {
    expect(myBook.getPages()).toBe(350);
  });

  it('check title is a string', () => {
    expect(() => new Book(451, 'author', 350, 1000)).toThrow();
  });

  it('check title is not empty', () => {
    expect(() => new Book('', 'Horacio Quiroga', 350, 1000)).toThrow();
  });

  it('check author is a string', () => {
    expect(() => new Book('titulo', 150, 350, 1000)).toThrow();
  });

  it('check page param is a number', () => {
    expect(() => new Book('titulo', 'autor', '350', 1000)).toThrow();
  });

  it('check pages not < 1', () => {
    expect(() => new Book('titulo', 'autor', -1, 1000)).toThrow();
  });

  it('toString()', () => {
    myBook.setWords(100);
    expect(myBook.toString()).toBe('Título: Cuentos de la Selva Autor: Horacio Quiroga Páginas: 350 Número de Palabras: 100');
  });

  it('set author to "Anónimo" if empty', () => {
    myBook.setAuthor('    ');
    expect(myBook.getAuthor()).toBe('Anónimo');
  });

  it('check words param is a number', () => {
    expect(() => myBook.setWords('hola')).toThrow();
  });

  it('check words', () => {
    myBook.setWords(100);
    expect(myBook.getWords()).toBe(100);
  });

  it('check words per page calculation', () => {
    myBook.setWords(35000);
    expect(myBook.wordsPerPage()).toBe(100);
  });
});
