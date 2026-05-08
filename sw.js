const CACHE_NAME = 'sts-safety-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/main.html',
  '/style.css',
  '/manifest.json',
  '/signature.html',
  '/not_found.html',
  '/12.html',
  '/neocities.png',

  // Libraries
  '/libs/jspdf.umd.min.js',
  '/libs/html2canvas.min.js',
  '/libs/html2pdf.bundle.min.js',
  '/libs/signature_pad.umd.min.js',

  // Fonts
  '/fonts/NotoSansArabic-Regular.ttf',

  // Driver pages
  '/Driver/DriverEvaluation.html',
  '/Driver/DriverEvaluationForm.html',
  '/Driver/report.html',

  // Emergency pages
  '/Emergency/creation.html',
  '/Emergency/result.html',
  '/Emergency/start.html',

  // Risk pages
  '/risk/2.html',
  '/risk/3.html',
  '/risk/AA.html',
  '/risk/Mainactivity.html',
  '/risk/Result.html',
  '/risk/Test.html',
  '/risk/make_risk.html',
  '/risk/mm.html',

  // Vehicle pages
  '/vehicle/driver-sign.html',
  '/vehicle/report.html',
  '/vehicle/vehicle.html',
  '/vehicle/vehicle_check.html',

  // Assets
  '/assets/1.png',
  '/assets/a.png',
  '/assets/aa.png',
  '/assets/aaa.png',
  '/assets/ambulance_fire_police_emergency_respose.png',
  '/assets/amr.png',
  '/assets/angle_lfiting_inspections.png',
  '/assets/b.png',
  '/assets/basket_man_a.png',
  '/assets/basket_man_b.png',
  '/assets/basket_man_c.png',
  '/assets/basket_man_d.png',
  '/assets/battery_128_daily_vehicle_check.png',
  '/assets/bb.png',
  '/assets/beneficiary_signature.png',
  '/assets/bolts_lfiting_inspections.png',
  '/assets/braking_128_daily_vehicle_check.png',
  '/assets/c.png',
  '/assets/cc.png',
  '/assets/clean_car_driver_evaluation_128.png',
  '/assets/clean_lfiting_inspections.png',
  '/assets/d.jpg',
  '/assets/damged_lfiting_inspections.png',
  '/assets/dd.png',
  '/assets/downloads.png',
  '/assets/driver_evaluation_128_.png',
  '/assets/driver_evaluation_128_2.png',
  '/assets/driver_signature.png',
  '/assets/e.png',
  '/assets/emergency_01.png',
  '/assets/emergency_lfiting_inspections.png',
  '/assets/exit.png',
  '/assets/f.png',
  '/assets/fa_ff_lfiting_inspections.png',
  '/assets/ff.png',
  '/assets/ff_128_daily_vehicle_check.png',
  '/assets/ff_emergency_response.png',
  '/assets/ff_emergency_response2.png',
  '/assets/fire.png',
  '/assets/fire_fire.png',
  '/assets/first_aid_emergency_response.png',
  '/assets/first_aid_emergency_response2.jpg',
  '/assets/fixed_covers_lfiting_inspections.png',
  '/assets/g.png',
  '/assets/gallery.png',
  '/assets/generators.png',
  '/assets/gg.png',
  '/assets/good_crene_lfiting_inspections.png',
  '/assets/good_distance_driver_evaluation_128.png',
  '/assets/good_distance_driver_evaluation_128_2.png',
  '/assets/good_distance_driver_evaluation_128_3.jpg',
  '/assets/grease_lfiting_inspections.png',
  '/assets/h.png',
  '/assets/height_limiting_lfiting_inspections.png',
  '/assets/hooks_lfiting_inspections.png',
  '/assets/horrn_128_daily_vehicle_check.png',
  '/assets/hospital_2.png',
  '/assets/hydraulics_lfiting_inspections.png',
  '/assets/i.png',
  '/assets/ic.png',
  '/assets/ic2.png',
  '/assets/j.png',
  '/assets/jj.png',
  '/assets/k.png',
  '/assets/l.png',
  '/assets/light_reverse_lfiting_inspections.png',
  '/assets/lighting_128_daily_vehicle_check.png',
  '/assets/load_limiting_switch_lfiting_inspections.png',
  '/assets/loads_lfiting_inspections.png',
  '/assets/logo.png',
  '/assets/m.png',
  '/assets/mirror_driver_evaluation_128.png',
  '/assets/mmm.png',
  '/assets/n.png',
  '/assets/no.png',
  '/assets/no_cell_phone_driver_evaluation_128_.png',
  '/assets/no_smoking_driver_evaluation_128.png',
  '/assets/o.png',
  '/assets/oil_128_daily_vehicle_check.png',
  '/assets/ok.png',
  '/assets/oli_lfiting_inspections.png',
  '/assets/osh_l1.png',
  '/assets/osh_white.png',
  '/assets/p.png',
  '/assets/portable_generators.png',
  '/assets/ppe2_256.png',
  '/assets/q.png',
  '/assets/r.png',
  '/assets/radio.png',
  '/assets/refueling_diesel.png',
  '/assets/risk.png',
  '/assets/s.png',
  '/assets/safety_frist.png',
  '/assets/seat_balt_driver_evaluation_128_.png',
  '/assets/seat_balt_driver_evaluation_128_2.png',
  '/assets/seat_belts_128_daily_vehicle_check.png',
  '/assets/site_reporter_extinguisher.png',
  '/assets/site_reporter_extinguisher2.png',
  '/assets/site_reporter_first_aid.png',
  '/assets/site_reporter_rescue_kit.png',
  '/assets/site_reporter_risk_1.png',
  '/assets/site_reporter_risk_2.png',
  '/assets/spare_tyre_128_daily_vehicle_check.png',
  '/assets/ss.png',
  '/assets/swp.png',
  '/assets/trafficlight.jpg',
  '/assets/tyre_128_daily_vehicle_check.png',
  '/assets/u.png',
  '/assets/v.png',
  '/assets/voda.png',
  '/assets/vodafone_logo_support.png',
  '/assets/wah_emergency_response.png',
  '/assets/waring5.png',
  '/assets/warning1.png',
  '/assets/warning2.png',
  '/assets/warning3.png',
  '/assets/warning4.png',
  '/assets/warning6.png',
  '/assets/wcs.png',
  '/assets/wearing_ppe_256.png',
  '/assets/wooden_pads_lfiting_inspections.png',
  '/assets/x.png',
  '/assets/y.png',
  '/assets/yes.png',
  '/assets/yy.png',
  '/assets/z.png',
  '/assets/zero_tolerance_safety_rules.png'
];

// Install: cache all assets
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Activate: clean old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache first, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;
      return fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        if (event.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
