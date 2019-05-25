const NavItems: any = [
  {                        // ---------------------- c-pannel -----------------------
    storeId: 'c-pannel',
    accessType: [
      {
        navId: 'super-user',
        navTree: [{
          navId: 'organization',
          color: '#fda348',
          icon: 'menu',
          text: 'Organization',
          children: [
            {
              navId: 'addOrganization',
              icon: 'org',
              color: '#ccc',
              text: 'Add an Organization',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }, {
          navId: 'employee',
          color: '#fda348',
          icon: 'menu',
          text: 'Employee Information',
          children: [
            {
              navId: 'newEmployee',
              icon: 'emp',
              color: '#ccc',
              text: 'Add New Employee',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }]
      }, {
        navId: 'admin-user',
        navTree: [{
          navId: 'organization',
          color: '#fda348',
          icon: 'menu',
          text: 'Organization',
          children: [
            {
              navId: 'addOrganization',
              icon: 'org',
              color: '#ccc',
              text: 'Add an Organization',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }, {
          navId: 'employee',
          color: '#fda348',
          icon: 'menu',
          text: 'Employee Information',
          children: [
            {
              navId: 'newEmployee',
              icon: 'emp',
              color: '#ccc',
              text: 'Add New Employee',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }]
      }
    ]
  }, {                    // ---------------------- web-store -----------------------
    storeId: 'web-store',
    accessType: [
      {
        navId: 'general_user',
        navTree: [{
          navId: 'tracking',
          color: '#fda348',
          icon: 'fa-map-marker',
          text: 'Tracking',
          children: [
            {
              navId: 'track_track',
              icon: 'org',
              color: '#ccc',
              text: 'Track',
              route: '/track/track'
            }, {
              navId: 'track_history',
              icon: 'org',
              color: '#ccc',
              text: 'History',
              route: '/track/history'
            }, {
              navId: 'track_single_track',
              icon: 'org',
              color: '#ccc',
              text: 'Single Track',
              route: '/track/single-track'
            }, {
              navId: 'track_multi_track',
              icon: 'org',
              color: '#ccc',
              text: 'Multi Track',
              route: '/track/multi-track'
            }, {
              navId: 'track_geo_fence',
              icon: 'org',
              color: '#ccc',
              text: 'Addsites/Geo Fence',
              route: '/track/geo-fence'
            },
          ]
        }, {
          navId: 'reports',
          color: '#fda348',
          icon: 'fa-file-text-o',
          text: 'Reports',
          children: [
            {
              navId: 'reports_dashboard',
              icon: 'emp',
              color: '#ccc',
              text: 'Dashboard',
              route: '/reports/dashboard'
            }, {
              navId: 'reports_vehicles_consolidated',
              icon: 'emp',
              color: '#ccc',
              text: 'Vehicles Consolidated',
              route: '/reports/vehicles-consolidated'
            }, {
              navId: 'reports_consolidated_site_location',
              icon: 'emp',
              color: '#ccc',
              text: 'Consolidated Site & Location',
              route: '/reports/consolidated-site-location'
            }, {
              navId: 'reports_consolidated_overspeed',
              icon: 'emp',
              color: '#ccc',
              text: 'Consolidated Overspeed',
              route: '/reports/consolidated-overspeed'
            }, {
              navId: 'reports_tollgate_report',
              icon: 'emp',
              color: '#ccc',
              text: 'Tollgate Report',
              route: '/reports/tollgate-report'
            }, {
              navId: 'reports_employee_attendance',
              icon: 'emp',
              color: '#ccc',
              text: 'employee attendance',
              route: '/reports/employee attendance'
            }
          ]
        }, {
          navId: 'statistics',
          color: '#fda348',
          icon: 'fa-pie-chart',
          text: 'Statistics',
          children: [
            {
              navId: 'statistics_vehiclewise_performance',
              icon: 'emp',
              color: '#ccc',
              text: 'Vehiclewise Performance',
              route: '/statistics/vehiclewise-performance'
            }, {
              navId: 'statistics_poi',
              icon: 'emp',
              color: '#ccc',
              text: 'POI',
              route: '/statistics/poi'
            }, {
              navId: 'statistics_consolidated',
              icon: 'emp',
              color: '#ccc',
              text: 'Consolidated',
              route: '/statistics/consolidated'
            }, {
              navId: 'statistics_executive_fuel',
              icon: 'emp',
              color: '#ccc',
              text: 'Executive Fuel',
              route: '/statistics/executive-fuel'
            }, {
              navId: 'statistics_monthly_dist',
              icon: 'emp',
              color: '#ccc',
              text: 'Monthly Dist',
              route: '/statistics/monthly-dist'
            }, {
              navId: 'statistics_monthly_dist_fuel',
              icon: 'emp',
              color: '#ccc',
              text: 'Monthly Dist & Fuel',
              route: '/statistics/monthly-dist-fuel'
            }
          ]
        }, {
          navId: 'sensor',
          color: '#fda348',
          icon: 'fa-thermometer-half',
          text: 'Sensor',
          children: [
            {
              navId: 'sensor_ac',
              icon: 'emp',
              color: '#ccc',
              text: 'AC',
              route: '/sensor/ac'
            }, {
              navId: 'sensor_idle_wastage',
              icon: 'emp',
              color: '#ccc',
              text: 'Idle Wastage',
              route: '/sensor/idle-wastage'
            }, {
              navId: 'sensor_primary_engine_on',
              icon: 'emp',
              color: '#ccc',
              text: 'Primary Engine On',
              route: '/sensor/primary-engine-on'
            }, {
              navId: 'sensor_secondary_engine_on',
              icon: 'emp',
              color: '#ccc',
              text: 'Secondary Engine On',
              route: '/sensor/secondary-engine-on'
            }, {
              navId: 'sensor_temperature',
              icon: 'emp',
              color: '#ccc',
              text: 'Temperature',
              route: '/sensor/temperature'
            }, {
              navId: 'sensor_fuel_analytics',
              icon: 'emp',
              color: '#ccc',
              text: 'Fuel Analytics',
              route: '/sensor/fuel-analytics'
            }, {
              navId: 'sensor_camera',
              icon: 'emp',
              color: '#ccc',
              text: 'Camera',
              route: '/sensor/camera'
            }
          ]
        }, {
          navId: 'performance',
          color: '#fda348',
          icon: 'fa-tachometer',
          text: 'performance',
          children: [
            {
              navId: 'performance_daily_performance',
              icon: 'emp',
              color: '#ccc',
              text: 'Daily Performance',
              route: '/performance/daily-performance'
            }, {
              navId: 'performance_monthly_performance',
              icon: 'emp',
              color: '#ccc',
              text: 'Monthly Performance',
              route: '/performance/monthly-performance'
            }
          ]
        }, {
          navId: 'schedule',
          color: '#fda348',
          icon: 'fa-clock-o',
          text: 'Schedule',
          children: [
            {
              navId: 'schedule_daily',
              icon: 'emp',
              color: '#ccc',
              text: 'Daily Schedule',
              route: '/schedule/daily'
            }, {
              navId: 'schedule_monthly',
              icon: 'emp',
              color: '#ccc',
              text: 'Monthly Schedule',
              route: '/schedule/monthly'
            }
          ]
        }, {
          navId: 'logout',
          color: '#fda348',
          icon: 'fa-power-off',
          text: 'Logout',
          children: [
            {
              navId: 'logout_out',
              icon: 'emp',
              color: '#ccc',
              text: 'Logout',
              route: '/schedule/logout'
            }
          ]
        }]
      }, {
        navId: 'super-incharge',
        navTree: [{
          navId: 'organization',
          color: '#fda348',
          icon: 'menu',
          text: 'Organization',
          children: [
            {
              navId: 'addOrganization',
              icon: 'org',
              color: '#ccc',
              text: 'Add an Organization',
              route: '/webstore/organization/add-organization'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }, {
          navId: 'employee',
          color: '#fda348',
          icon: 'menu',
          text: 'Employee Information',
          children: [
            {
              navId: 'newEmployee',
              icon: 'emp',
              color: '#ccc',
              text: 'Add New Employee',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }]
      }, {
        navId: 'incharge',
        navTree: [{
          navId: 'organization',
          color: '#fda348',
          icon: 'menu',
          text: 'Organization',
          children: [
            {
              navId: 'addOrganization',
              icon: 'org',
              color: '#ccc',
              text: 'Add an Organization',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }, {
          navId: 'employee',
          color: '#fda348',
          icon: 'menu',
          text: 'Employee Information',
          children: [
            {
              navId: 'newEmployee',
              icon: 'emp',
              color: '#ccc',
              text: 'Add New Employee',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }]
      }, {
        navId: 'end-user',
        navTree: [{
          navId: 'organization',
          color: '#fda348',
          icon: 'menu',
          text: 'Organization',
          children: [
            {
              navId: 'addOrganization',
              icon: 'org',
              color: '#ccc',
              text: 'Add an Organization',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }, {
          navId: 'employee',
          color: '#fda348',
          icon: 'menu',
          text: 'Employee Information',
          children: [
            {
              navId: 'newEmployee',
              icon: 'emp',
              color: '#ccc',
              text: 'Add New Employee',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'updateOrgInfo',
              icon: 'org',
              color: '#ccc',
              text: 'Updating Organization Information',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'addOrgBranch',
              icon: 'org',
              color: '#ccc',
              text: 'Add a branch',
              route: '/m/feature/access-rules/ar'
            },
            {
              navId: 'leavesOrgConfig',
              icon: 'org',
              color: '#ccc',
              text: 'Leaves Configuration',
              route: '/m/feature/access-rules/ar'
            }
          ]
        }]
      }
    ]
  }
];

export default NavItems;
