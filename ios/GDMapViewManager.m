//
//  GDMapViewManager.m
//  OB
//
//  Created by 得建岳 on 2017/9/10.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import "GDMapViewManager.h"
#import <MapKit/MapKit.h>
#import "GDMapView.h"

@implementation GDMapViewManager

RCT_EXPORT_MODULE(GDMapView)
RCT_EXPORT_VIEW_PROPERTY(showsCompass, BOOL)
- (UIView *)view {
  GDMapView *mapView = [[GDMapView alloc] init];
  mapView.backgroundColor = [UIColor redColor];
  mapView.showsUserLocation = YES;
  mapView.userTrackingMode = MKUserTrackingModeFollowWithHeading;
  return mapView;
}

@end
