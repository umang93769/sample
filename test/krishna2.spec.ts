describe('ButtonComponent', () => {
  let component: ButtonComponent;

  beforeEach(() => {
    component = new ButtonComponent();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should log "Button clicked!" when handleButtonClick is called', () => {
    spyOn(console, 'log');

    component.handleButtonClick();

    expect(console.log).toHaveBeenCalledWith('Button clicked!');
  });

  it('should call custom logic when handleButtonClick is called', () => {
    spyOn(component, 'customLogic');

    component.handleButtonClick();

    expect(component.customLogic).toHaveBeenCalled();
  });
});