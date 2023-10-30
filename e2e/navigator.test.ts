import { expect, element, device, by } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative(); // couse some trouble on android tests
  });

  it('should show login screen', async () => {
    const loginBtn = element(by.id('loginButton'));
    await expect(loginBtn).toBeVisible();
  });

  it('should show home screen after login button tap', async () => {
    const loginBtn = element(by.id('loginButton'));
    await loginBtn.tap();
    await expect(element(by.text('Hello Mike!'))).toBeVisible();
  });

  it('should show profile screen after button tap', async () => {
    const profielBtn = element(by.id('goToProfileButton'));
    await profielBtn.tap();
    await expect(element(by.text('Elliot Thomson'))).toBeVisible();
  });
});
