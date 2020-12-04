import { NombreEtoilesPipe } from './etoiles.pipe';

describe('NombreEtoilesPipe', () => {
  it('create an instance', () => {
    const pipe = new NombreEtoilesPipe();
    expect(pipe).toBeTruthy();
  });
});