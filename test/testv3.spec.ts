describe('ButtonComponent', () => {
  let component: ButtonComponent;

  beforeEach(() => {
    component = new ButtonComponent();
  });

  it('should check if button is clicked', () => {
    spyOn(component, 'handleButtonClick');

    const buttonElement = document.createElement('button');
    buttonElement.addEventListener('click', component.handleButtonClick);

    buttonElement.click();

    expect(component.handleButtonClick).toHaveBeenCalled();
  });
});