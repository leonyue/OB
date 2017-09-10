/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <CoreLocation/CoreLocation.h>

@interface AppDelegate ()<CLLocationManagerDelegate>

@property (nonatomic, strong) CLLocationManager* locationManager;

@end

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  NSURL *jsCodeLocation;

  jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index.ios" fallbackResource:nil];

  RCTRootView *rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                      moduleName:@"OB"
                                               initialProperties:nil
                                                   launchOptions:launchOptions];
  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  
//  CLLocationManager *locationManager = [[CLLocationManager alloc] init];
  self.locationManager = [[CLLocationManager alloc] init];
  self.locationManager.delegate = self;
  self.locationManager.desiredAccuracy = kCLLocationAccuracyBest;
  [self findMe];
  
  return YES;
}

- (void)findMe
{
  /** 由于IOS8中定位的授权机制改变 需要进行手动授权
   * 获取授权认证，两个方法：
   * [self.locationManager requestWhenInUseAuthorization];
   * [self.locationManager requestAlwaysAuthorization];
   */
  if ([self.locationManager respondsToSelector:@selector(requestAlwaysAuthorization)]) {
    NSLog(@"requestAlwaysAuthorization");
    [self.locationManager requestAlwaysAuthorization];
  }
  else if ([self.locationManager respondsToSelector:@selector(requestWhenInUseAuthorization)]) {
    NSLog(@"requestWhenInUseAuthorization");
    [self.locationManager requestWhenInUseAuthorization];
  }
  
  //开始定位，不断调用其代理方法
  [self.locationManager startUpdatingLocation];
  NSLog(@"start gps");
}

- (void)locationManager:(CLLocationManager *)manager
     didUpdateLocations:(NSArray *)locations
{
  // 1.获取用户位置的对象
  CLLocation *location = [locations lastObject];
  CLLocationCoordinate2D coordinate = location.coordinate;
  NSLog(@"纬度:%f 经度:%f", coordinate.latitude, coordinate.longitude);
  
  // 2.停止定位
  [manager stopUpdatingLocation];
}

- (void)locationManager:(CLLocationManager *)manager
       didFailWithError:(NSError *)error
{
  if (error.code == kCLErrorDenied) {
    // 提示用户出错原因，可按住Option键点击 KCLErrorDenied的查看更多出错信息，可打印error.code值查找原因所在
  }
}

@end
