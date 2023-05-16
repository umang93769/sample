describe('ButtonComponent', () => {
  let component: ButtonComponent;

  beforeEach(() => {
    component = new ButtonComponent();
  });

  it('should call handleButtonClick when button is clicked', () => {
    spyOn(component, 'handleButtonClick');

    const button = document.createElement('button');
    button.click();

    expect(component.handleButtonClick).toHaveBeenCalled();
  });
});