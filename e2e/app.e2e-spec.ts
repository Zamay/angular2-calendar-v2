import { TestCalendarPage } from './app.po';

describe('test-calendar App', () => {
  let page: TestCalendarPage;

  beforeEach(() => {
    page = new TestCalendarPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
