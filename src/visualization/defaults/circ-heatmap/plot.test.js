import fillPlot from './plot';

describe('Fill plot', () => {
  it('should return user plot when valid', () => {
    const plot = { segments: [] };
    const plots = [
      { name: 'plot1', segments: [] },
      { name: 'plot2', segments: [] },
    ];
    const expected = plot;
    expect(fillPlot(plot, plots)).toEqual(expected);
  });

  it('should return first plot element when user plot is invalid', () => {
    const plot = [];
    const plots = [
      { name: 'plot1', segments: [] },
      { name: 'plot2', segments: [] },
    ];
    const expected = plots[0];
    expect(fillPlot(plot, plots)).toEqual(expected);
  });
});
