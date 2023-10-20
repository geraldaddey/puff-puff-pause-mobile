import { expect, element, device, by } from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    // await device.reloadReactNative(); // couse some trouble on android tests
  });

  it('should show home screen with navigation buttons', async () => {
    const profielBtn = element(by.id('goToProfileButton'));
    await expect(profielBtn).toBeVisible();
  });

  it('should show profile screen after button tap', async () => {
    const profielBtn = element(by.id('goToProfileButton'));
    await profielBtn.longPress(); // longPress instead of tap becuase of bug: https://github.com/wix/Detox/issues/3762
    await expect(element(by.text('Elliot Thomson'))).toBeVisible();
  });
});
