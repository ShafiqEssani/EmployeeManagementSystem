import { EMS3Page } from './app.po';

describe('ems3 App', () => {
  let page: EMS3Page;

  beforeEach(() => {
    page = new EMS3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
