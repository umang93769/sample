describe('ButtonComponent', () => {
  let component: ButtonComponent;

  beforeEach(() => {
    component = new ButtonComponent();
  });

  it('should render the button correctly', () => {
    const buttonElement = document.querySelector('button');
    expect(buttonElement).toBeTruthy();
  });

  it('should trigger the click event when the button is clicked', () => {
    spyOn(component, 'handleButtonClick');

    const buttonElement = document.querySelector('button');
    buttonElement.click();

    expect(component.handleButtonClick).toHaveBeenCalled();
  });

  it('should log the correct message to the console when the button is clicked', () => {
    spyOn(console, 'log');

    const buttonElement = document.querySelector('button');
    buttonElement.click();

    expect(console.log).toHaveBeenCalledWith('Button clicked!');
  });  
});