import { expect, element, device, by } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show home screen with navigation buttons', async () => {
    const profielBtn = element(by.id('profile'));
    await expect(profielBtn).toBeVisible();
  });

  it('should show profile screen after button tap', async () => {
    // await expect(element(by.id('profile'))).toBeVisible();

    await element(by.id('profile')).tap();
    await expect(element(by.text('Elliot Thomson'))).toBeVisible();
  });
});
