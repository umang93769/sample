describe('ButtonComponent', () => {
  let component: ButtonComponent;

  beforeEach(() => {
    component = new ButtonComponent();
  });

  it('should log when button is clicked', () => {
    spyOn(console, 'log');

    component.handleButtonClick();

    expect(console.log).toHaveBeenCalledWith('Button clicked!');
  });
});