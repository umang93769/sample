1. Test that the handleButtonClick() method is called when the button is clicked:

describe('ButtonComponent', () => {
  let component: ButtonComponent;

  beforeEach(() => {
    component = new ButtonComponent();
  });

  it('should call handleButtonClick() when button is clicked', () => {
    spyOn(component, 'handleButtonClick');

    const button = document.createElement('button');
    button.addEventListener('click', component.handleButtonClick);

    button.click();

    expect(component.handleButtonClick).toHaveBeenCalled();
  });
});

2. Test that the console log message is printed when the button is clicked: 
describe('ButtonComponent', () => {
  let component: ButtonComponent;

  beforeEach(() => {
    component = new ButtonComponent();

    spyOn(console, 'log'); // Spy on console log to check if it's called with expected message   });

  it('should print "Button clicked!" to console when button is clicked', () => {     const button = document.createElement('button');     button.addEventListener('click', component.handleButtonClick);     button.click();      expect(console.log).toHaveBeenCalledWith('Button clicked!');   }); });