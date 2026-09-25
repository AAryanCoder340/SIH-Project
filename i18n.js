/**
 * CoastWatch — Multilingual i18n (Internationalization) Engine
 * Supported Languages: English (en), Hindi (hi), Tamil (ta), Telugu (te), Bengali (bn), Marathi (mr), Gujarati (gu), Malayalam (ml), Odia (or), Kannada (kn)
 * 
 * Features:
 * - Translation key-based rendering (no duplicate HTML pages)
 * - data-i18n, data-i18n-placeholder, data-i18n-title, data-i18n-aria-label, data-i18n-html
 * - Parameterized interpolation: t('shelters.found_count', { count: 5 })
 * - Fallback to English for any missing translation keys
 * - Persistence in localStorage
 * - Dynamic event dispatching for UI re-rendering
 * - Extensible architecture: Add new Indian languages by simply adding a dictionary to TRANSLATIONS
 */

const SUPPORTED_LANGUAGES = {
    en: { name: 'English', nativeName: 'English', flag: '🇬🇧', dir: 'ltr' },
    hi: { name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
    ta: { name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', dir: 'ltr' },
    te: { name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', dir: 'ltr' },
    bn: { name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳', dir: 'ltr' },
    mr: { name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', dir: 'ltr' },
    gu: { name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', dir: 'ltr' },
    ml: { name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', dir: 'ltr' },
    or: { name: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳', dir: 'ltr' },
    kn: { name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', dir: 'ltr' }
};

const TRANSLATIONS = {
    // =========================================================================
    // ENGLISH (en)
    // =========================================================================
    en: {
        app: {
            name: 'COASTWATCH',
            title: 'CoastWatch — Disaster Intelligence & Emergency Response Platform',
            headline: 'CoastWatch Emergency Operations',
            tagline: 'Real-time disaster intelligence, coastal monitoring & emergency response network.',
            quick_menu_title: 'Quick Operations Menu'
        },
        auth: {
            portal_title: 'Secure Access Portal',
            portal_subtitle: 'Authorized Personnel & Emergency Response Command Network',
            access_code_placeholder: 'Enter Access Code',
            toggle_password: 'Show / Hide password',
            invalid_code: 'Invalid access code. Please check credentials and try again.',
            access_console_btn: 'Access Command Console',
            welcome_user: 'Welcome, User',
            welcome_admin: 'Welcome, Administrator',
            trust_score: 'Trust Score',
            status_online: 'Online',
            status_live: 'Live',
            logout: 'Logout'
        },
        menu: {
            latest_alerts: 'Latest Alerts',
            live_gis_map: 'Live GIS Map',
            sos_distress: 'SOS / Emergency Distress',
            helpline_dir: 'Helpline Directory',
            find_shelters: 'Find Safe Shelters',
            weather_conditions: 'Weather & Sea Conditions',
            community_intel: 'Community Intelligence',
            future_risk: 'Future Risk Estimate',
            safety_protocols: 'Disaster Safety Protocols'
        },
        nav: {
            map: 'Live Map',
            report: 'Report Hazard',
            sos: 'Emergency SOS',
            social: 'Social Feed',
            shelters: 'Find Shelter',
            risk: 'Risk Estimate',
            safety: 'Safety Tips',
            dashboard: 'Dashboard'
        },
        map: {
            title: 'Live Hazard GIS Map',
            subtitle: 'Real-time disaster activity and multi-source intelligence across monitored regions',
            active_hazards_count: 'Active Hazards: {count}',
            filter_all_severities: 'All Severities',
            filter_high_risk: 'High Risk (🔴)',
            filter_medium_risk: 'Medium Risk (🟠)',
            filter_low_risk: 'Low Risk (🟢)',
            filter_all_hazards: 'All Hazard Types',
            filter_floods: 'Floods',
            filter_cyclones: 'Cyclones / Storms',
            filter_tsunami: 'Tsunami / Coastal',
            filter_fires: 'Fires',
            verified_recent_incidents: 'Verified Recent Incidents',
            active_alert_badge: 'Active Alert',
            verified_badge: 'Verified ({score}%)',
            reporter_label: 'Reporter: {name}',
            risk_label: '{severity} RISK',
            reports_count: '{count} reports'
        },
        report: {
            title: 'Report an Incident',
            subtitle: 'Submit ground disaster intelligence with multi-modal media for AI verification and response',
            hazard_type_label: '01 — Hazard Classification',
            hazard_type_select: 'Select hazard classification',
            hazard_cyclone: 'Cyclone / Severe Storm',
            hazard_fire: 'Fire / Industrial Hazard',
            hazard_flood: 'Coastal / Urban Flooding',
            hazard_earthquake: 'Earthquake / Tremor',
            hazard_landslide: 'Landslide / Erosion',
            hazard_other: 'Other Emergency Incident',
            location_label: '02 — Incident Location',
            location_placeholder: 'Enter landmark or location name',
            gps_btn: 'GPS',
            severity_label: '03 — Severity Assessment',
            severity_low_title: 'Low Severity',
            severity_low_desc: 'Minor disruption / Alert',
            severity_medium_title: 'Medium Severity',
            severity_medium_desc: 'Hazardous / Response needed',
            severity_high_title: 'High / Critical Severity',
            severity_high_desc: 'Life-threatening / Urgent',
            description_label: '04 — Situation Description',
            description_placeholder: 'Describe the disaster condition, visible hazards, stranded people, or road blockages...',
            evidence_label: '05 — Evidence Upload (AI Verification)',
            evidence_drop_title: 'Click or Drop Photo/Video Evidence',
            evidence_drop_subtitle: 'Supported formats: JPG, PNG, MP4, MOV (Max 10MB per file)',
            submit_btn: 'Submit Disaster Intelligence Report',
            submitting_btn: 'Submitting...',
            fill_required_fields: 'Please fill in all required fields (including severity).',
            report_submitted_success: 'Disaster report submitted successfully!',
            report_saved_trust: 'Report saved (ID: {id}). {trust}',
            trust_points_bonus: '+{points} Trust Points'
        },
        ai: {
            analyzing: 'AI Analyzing evidence…',
            consistent: 'Evidence Consistent',
            needs_human: 'Needs Human Verification',
            inconclusive: 'Evidence Inconclusive',
            evidence_matches: 'Evidence matches your report type.',
            evidence_flagged: 'Evidence does not clearly match — flagged for review.',
            evidence_unclassified: 'AI could not classify the evidence.',
            detected: 'Detected: {label}',
            confidence: 'Confidence: {conf}%',
            trust_bonus: '+{bonus} trust'
        },
        sos: {
            title: 'Emergency Distress SOS Hub',
            subtitle: 'Real-time distress transmission, GPS pinpointing, and direct authority operations link',
            hero_desc: 'Activating SOS broadcasts an emergency distress beacon to the CoastWatch Operations Command Center with your exact coordinates. For immediate life threats, dial',
            tap_for_help: 'TAP FOR HELP',
            sos_live: 'SOS LIVE',
            status_below: 'STATUS BELOW',
            registering: 'REGISTERING…',
            please_wait: 'PLEASE WAIT',
            retry_sos: 'RETRY SOS',
            tap_to_retry: 'TAP TO RETRY',
            sos_resolved: 'SOS RESOLVED',
            case_closed: 'CASE CLOSED',
            tracker_title: 'Live Distress Incident Tracker',
            ref_id_label: 'SOS Reference Identifier',
            activated_at: 'Activated: {time}',
            location_captured_title: 'Location Captured',
            near_location: 'Near {name} (≈{dist} km)',
            coords_captured: 'Coordinates captured',
            open_google_maps: 'Open in Google Maps',
            location_unavailable_title: 'Location Unavailable',
            location_unavailable_desc: 'GPS could not be captured. Authorities will call you for your exact location. If possible, call 112 and share your position.',
            authority_notes_title: 'Authority Operator Notes',
            warn_no_location: 'Location not shared. When authorities call, please state your exact location, nearest landmark, and any visible crossroads or buildings.',
            warn_pending_ack: 'Waiting for authority acknowledgment. This step confirms an operator has seen your SOS. The system automatically refreshes every few seconds.',
            reset_btn: 'Reset Device SOS Tracking',
            reset_confirm: 'Resetting will stop tracking this SOS on this device. Emergency services may still be responding. Continue?',
            reset_done: 'SOS tracking reset on this device.',
            sos_active_already: 'SOS already active! Help is on the way. Status is being refreshed.',
            failed_register: 'Failed to register SOS',
            floating_tooltip: 'Emergency SOS — Tap for immediate help',
            
            info_title: 'Emergency Information & Operational Guidance',
            info_gps_title: 'High-Accuracy GPS Pinpoint',
            info_gps_desc: 'Your coordinates are recorded with sub-meter geolocation to provide precise navigation vectors to search and rescue teams.',
            info_id_title: 'Unique SOS Reference ID',
            info_id_desc: 'When speaking with official responders or helplines, quote your assigned SOS Reference ID for priority telemetry sync.',
            info_eoc_title: 'EOC Direct Dispatch Queue',
            info_eoc_desc: 'Distress beacons immediately appear on the Authority Emergency Operations Center queue with real-time status transitions.',
            info_peril_title: 'Life-Threatening Peril (Call 112)',
            info_peril_desc: 'For critical, immediate life-threatening emergencies, always dial 112 in addition to broadcasting your digital SOS beacon.',

            helpline_title: 'National Emergency Helpline Directory',
            helpline_subtitle: 'Direct one-tap telephone access to 24/7 disaster response agencies, maritime rescue, and civilian crisis support.',
            cat_first_responders: 'National First Responders',
            hl_112_desc: 'All Emergencies (24/7)',
            hl_100_desc: 'Police Control',
            hl_101_desc: 'Fire Rescue',
            hl_108_desc: 'Medical Ambulance',
            cat_disaster_auth: 'Disaster Authorities',
            hl_ndma_desc: 'NDMA Control',
            hl_ndrf_desc: 'NDRF HQ',
            hl_state_desc: 'State Disaster Control',
            hl_district_desc: 'District Helpline',
            cat_coast_guard: 'Coast Guard & Maritime',
            hl_cg_emergency: 'Coast Guard Emergency',
            hl_maritime_rescue: 'Maritime Rescue',
            hl_fishermen: 'Fishermen Helpline',
            hl_port_emergency: 'Port Emergency',
            cat_crisis_support: 'Crisis & Special Assistance',
            hl_psy_support: 'Psychological Support',
            hl_women: 'Women Helpline',
            hl_child: 'Child Helpline',
            hl_traffic: 'Emergency Traffic',

            quick_actions_title: 'Quick Emergency Actions',
            action_1_title: '1. Stay Calm & Conserve Battery',
            action_1_desc: 'Keep phones in low-power mode and reduce screen brightness.',
            action_2_title: '2. Evacuate to Higher Ground',
            action_2_desc: 'For tsunami, flood, or surge alerts, immediately move inland or to designated safe shelters.',
            action_3_title: '3. Avoid Low-Lying Roads',
            action_3_desc: 'Do not drive or walk through standing floodwaters or near downed electrical infrastructure.'
        },
        sos_status: {
            PENDING: 'SOS Submitted',
            ACKNOWLEDGED: 'Marked by Authority',
            IN_PROGRESS: 'Response in Progress',
            RESCUE_ASSIGNED: 'Rescue Team Assigned',
            RESOLVED: 'Resolved',
            step_label: 'Step {step} · {status}',
            in_progress_text: 'In progress…'
        },
        sos_notes: {
            PENDING: 'Your distress signal has been sent to the CoastWatch emergency system.',
            ACKNOWLEDGED: 'An authority operator has acknowledged your SOS signal.',
            IN_PROGRESS: 'Emergency responders are mobilizing. Stay calm and keep your phone on.',
            RESCUE_ASSIGNED: 'A dedicated rescue team has been dispatched to your location.',
            RESOLVED: 'This SOS incident has been marked as resolved. Stay safe.'
        },
        social: {
            title: 'Social Disaster Intelligence & Signal Detection',
            subtitle: 'Real-time social media crawling, NLP extraction, confidence clustering, and verification',
            demo_banner_simulated: 'DEMO MODE • SIMULATED SOCIAL SIGNAL STREAM',
            demo_banner_live: 'LIVE X DATA • OFFICIAL API',
            stat_total: 'Total Signals',
            stat_total_sub: 'Total intelligence posts captured',
            stat_new: 'New Signals',
            stat_new_sub: 'Pending NLP categorization',
            stat_review: 'Under Review',
            stat_review_sub: 'Corroboration in progress',
            stat_verified: 'Verified',
            stat_verified_sub: 'Confirmed ground hazards',
            filters_label: 'Filters:',
            filter_all_status: 'All Statuses',
            filter_status_new: 'New',
            filter_status_review: 'Under Review',
            filter_status_verified: 'Verified',
            filter_status_dismissed: 'Dismissed',
            filter_all_hazards: 'All Hazards',
            filter_flood: 'Flood',
            filter_earthquake: 'Earthquake',
            filter_cyclone: 'Cyclone',
            filter_fire: 'Fire',
            filter_landslide: 'Landslide',
            refresh_signals_btn: 'Refresh Signals',
            analyzing_stream: 'Analyzing social signals stream...',
            no_signals_match: 'No signals found matching filters.',
            btn_review: 'Review',
            btn_verify: 'Verify',
            btn_dismiss: 'Dismiss',
            confidence_label: 'Confidence:',
            corroboration_label: 'Corroboration:',
            hazard_label: 'Hazard:',
            location_label: 'Location:'
        },
        dashboard: {
            title: 'Emergency Operations Center (EOC) Dashboard',
            subtitle: 'Real-time incident oversight, alert broadcast transmission, and active SOS queue management',
            stat_total_reports: 'Total Reports',
            stat_total_reports_sub: 'Total citizen & sensor reports',
            stat_high_priority: 'High Priority',
            stat_high_priority_sub: 'Urgent response required',
            stat_verified_reports: 'Verified Reports',
            stat_verified_reports_sub: 'Evidence verified via AI/Authority',
            stat_active_users: 'Active Personnel',
            stat_active_users_sub: 'Field responders & citizens',
            stat_active_incidents: 'Active Incidents',
            stat_active_incidents_sub: 'Unresolved hazard zones',

            broadcast_card_title: 'Broadcast Emergency Public Alert',
            disaster_type_label: 'Hazard Category',
            alert_cyclone: 'Cyclone / Severe Storm',
            alert_tsunami: 'Tsunami / Coastal High Swell',
            alert_flood: 'Coastal / Urban Flood',
            alert_storm: 'Severe Maritime Gale / Squall',
            alert_fire: 'Fire / Industrial Hazard',
            alert_emergency: 'General Coastal Emergency',
            alert_level_label: 'Alert Level',
            level_warning: 'Warning (High Priority)',
            level_watch: 'Watch (Moderate Monitoring)',
            level_advisory: 'Advisory (Informational)',
            level_emergency: 'Emergency Distress (Critical Action)',
            radius_label: 'Broadcast Radius (km)',
            message_label: 'Emergency Alert Message & Evacuation Advisory',
            message_placeholder: 'Enter emergency alert advisory for broadcast to affected zone (e.g., Severe cyclone approaching the coastal region. Please move to a safe location.)...',
            transmit_btn: 'Transmit Emergency Broadcast',
            transmitting_btn: 'Transmitting Emergency Broadcast...',
            transmit_success: '✓ Emergency alert broadcast sent to all active stations.',

            broadcasts_queue_title: 'Active Broadcast Transmissions',
            broadcasts_queue_hint: 'Terminating an alert immediately clears the emergency pop-up, advisory banner, and GIS map zone for all connected citizens.',
            refresh_broadcasts_btn: 'Refresh Transmissions',
            no_broadcasts_on_air: 'No active broadcast transmissions on air.',
            on_air_badge: 'ON AIR',
            terminate_btn: 'Terminate Warning',
            terminate_confirm: 'Are you sure you want to terminate this emergency broadcast? It will be removed immediately from all citizen screens, advisory banners, and GIS map zones.',

            sos_queue_title: 'Active SOS Emergencies Queue',
            sos_queue_hint: 'Resolved incidents automatically clear from active dispatch view.',
            filter_sos_active: 'Active',
            filter_sos_resolved: 'Resolved',
            filter_sos_all: 'All',
            refresh_sos_btn: 'Refresh Queue',
            loading_sos_queue: 'Loading SOS incidents queue…',
            no_active_sos: 'No Active SOS Emergencies',
            no_active_sos_desc: 'All emergency incidents are resolved. New alerts will appear here in real time.',
            no_resolved_sos: 'No resolved SOS incidents on record.',
            no_sos_recorded: 'No SOS incidents recorded.',
            mark_step: 'Mark: {status}',
            skip_change_status: 'Skip / Change status',
            resolve_auto_remove: 'Resolve & Auto-Remove',
            edit_notes_btn: 'Edit notes',
            delete_record_btn: 'Delete record',
            purge_resolved_btn: 'Purge All {count} Resolved Record(s)',
            tile_awaiting_ack: 'Awaiting Ack',
            tile_in_progress: 'Ack / In Progress',
            tile_rescue_assigned: 'Rescue Assigned',
            tile_resolved: 'Resolved',
            tile_total_all_time: 'Total (all time)',
            tile_active_in_queue: 'Active (in queue)'
        },
        risk: {
            title: 'Future Disaster Risk Index Estimation',
            subtitle: 'Combines multi-decadal historical disaster catalogs (ISRO/NASA) with live weather & environmental signals',
            parameters_title: 'Location Risk Assessment Parameters',
            parameters_desc: 'Enter location coordinates or select GPS. The system synthesizes historical disaster clusters with active meteorological variables. If data coverage is insufficient, estimates are safely withheld.',
            latitude_label: 'Latitude',
            longitude_label: 'Longitude',
            radius_label: 'Search Radius (km)',
            horizon_label: 'Planning Horizon (hours)',
            location_name_label: 'Location Label / Regional Name (Optional)',
            historical_title: 'Real Historical Disaster Ingestion',
            historical_desc: 'Source: India Flood & Disaster Inventory (1967–2023) / NRSC-ISRO & NASA EONET. Real historical records with zero fabrication.',
            start_date_label: 'Historical Start Date',
            end_date_label: 'Historical End Date',
            use_gps_btn: 'Use Current GPS',
            ingest_historical_btn: 'Ingest Historical Data',
            compute_risk_btn: 'Compute Risk Index',
            scan_areas_btn: 'Scan Qualifying Areas',
            risk_estimate_title: 'Future Risk Estimate',
            primary_hazard_indicator: 'Primary Hazard Indicator: {hazard}',
            historical_subscore: 'Historical Sub-score',
            environmental_subscore: 'Environmental Sub-score',
            planning_time_window: 'Planning Time Window',
            confidence_uncertainty: 'Confidence / Uncertainty',
            main_factors_title: 'Main Contributing Factors',
            data_coverage_title: 'Data Coverage',
            withheld_title: 'Risk Estimate Withheld',
            insufficient_data: 'Insufficient Data',
            withheld_desc: 'A future risk score is only computed when sufficient local historical records and current environmental observations exist.',
            unmet_requirements: 'Unmet Sufficiency Requirements',
            how_to_enable: 'How to Enable an Estimate',
            how_to_enable_desc: 'Use the Ingest Historical Data button above to pull real historical disaster records for this area from NASA EONET, or widen your search radius.',
            method_disclaimer: 'This future risk score is an indicator index combining historical records and current ingested weather/alert signals. It is not a guaranteed disaster prediction.'
        },
        shelters: {
            title: 'Intelligent Safe Shelter Routing',
            subtitle: 'Multi-criteria suitability scoring (capacity, local risk, road access, hazard proximity, distance)',
            dev_preview_title: 'Development Preview Dataset',
            find_card_title: 'Find Safest Available Shelter',
            find_card_desc: 'CoastWatch evaluates shelters beyond simple distance. Our algorithm analyzes real-time occupancy, nearby hazard risks, road blockages, and terrain safety.',
            latitude_label: 'Your Latitude',
            longitude_label: 'Your Longitude',
            radius_label: 'Search Radius (km)',
            use_gps_btn: 'Use Current GPS',
            rank_recommend_btn: 'Rank & Recommend Shelters',
            best_recommended_title: 'Best Recommended Shelter',
            only_shelter_available: 'Only Shelter Available',
            alternative_shelters_title: 'Alternative Ranked Shelters',
            suitability_score_label: 'Suitability Score',
            occupancy_label: 'Occupancy: {used}/{total}',
            spots_available: '{count} spots available',
            pct_full: '{pct}% full',
            amenities_title: 'Amenities',
            amenity_water: 'Drinking Water',
            amenity_electricity: 'Electricity',
            amenity_food: 'Food Service',
            amenity_first_aid: 'First Aid Kit',
            amenity_medical: 'Medical Staff',
            amenity_sanitation: 'Sanitation',
            amenity_parking: 'Parking',
            amenity_emergency_power: 'Backup Power',
            why_selected_title: 'Why this shelter was selected',
            score_breakdown_title: 'View Suitability Score Breakdown ({count} factors)',
            recommended_route_title: 'Recommended Route',
            straight_distance: 'Straight Distance',
            road_distance: 'Road Distance',
            estimated_travel: 'Estimated Travel',
            road_status_label: 'Road Status',
            route_steps_title: 'Route Steps',
            get_directions_btn: 'Get Directions',
            view_on_map_btn: 'View on Map',
            last_updated: 'Last updated: {time}',
            status_open: 'OPEN',
            status_full: 'FULL',
            status_closed: 'CLOSED',
            status_evacuating: 'EVACUATING',
            risk_low: 'LOW RISK',
            risk_medium: 'MEDIUM RISK',
            risk_high: 'HIGH RISK',
            risk_critical: 'CRITICAL RISK',
            road_open: 'ROADS OPEN',
            road_restricted: 'ROADS RESTRICTED',
            road_blocked: 'ROADS BLOCKED',
            road_unknown: 'ROADS UNKNOWN',
            rating_excellent: 'Excellent',
            rating_acceptable: 'Acceptable',
            rating_poor: 'Poor',
            no_shelters_found: 'No reachable shelters found within {radius} km. Try increasing the search radius.'
        },
        safety: {
            title: 'Disaster Safety Guidelines & Response Protocols',
            subtitle: 'Authoritative guidelines for coastal hazards, cyclones, storm surges, and flood management',
            dos_title: 'Critical DO\'S — Follow These Guidelines',
            do_1: 'Stay tuned to official emergency broadcasts, weather bulletins, and CoastWatch alerts.',
            do_2: 'Keep a sealed emergency grab-bag ready (drinking water, dry food, torch, first-aid, power bank).',
            do_3: 'Move to higher ground or reinforced multi-story shelters immediately if a tsunami/surge warning is issued.',
            do_4: 'Comply promptly with local administration and NDRF evacuation orders without delay.',
            do_5: 'Secure essential documents, identification, and medical records in waterproof cases.',
            do_6: 'Prioritize evacuation assistance for children, pregnant women, elderly, and differently-abled individuals.',
            do_7: 'Stay well clear of beaches, river mouths, and exposed coastal roads during high tide or cyclone advisories.',

            donts_title: 'Critical DON\'TS — Actions to Avoid',
            dont_1: 'Do NOT ignore official warnings or delay evacuation when advisories are active.',
            dont_2: 'Do NOT visit coastlines, ports, or seawalls to watch storm waves or cyclone landfall.',
            dont_3: 'Do NOT operate electrical switches or appliances in waterlogged or flooded buildings.',
            dont_4: 'Do NOT circulate unverified rumors, alarming social media posts, or fake distress messages.',
            dont_5: 'Do NOT attempt to drive or wade through flooded roads or submerged bridges.',
            dont_6: 'Do NOT leave domestic pets or livestock tethered without access to safety.',
            dont_7: 'Do NOT return to damaged structures until cleared as safe by disaster management authorities.',

            phased_protocols_title: 'Phased Disaster Management Protocols',
            before_title: 'Before Disaster',
            before_1: 'Map out verified primary and secondary evacuation routes',
            before_2: 'Formulate a family communication and reunion plan',
            before_3: 'Store non-perishable food and 3 days of clean water',
            before_4: 'Secure loose outdoor furniture, tin roofs, and fixtures',
            during_title: 'During Disaster',
            during_1: 'Remain indoors away from glass windows and loose facades',
            during_2: 'Monitor battery-operated radio and CoastWatch updates',
            during_3: 'Shut off main electrical breakers and LPG cylinders',
            during_4: 'Keep mobile phones charged and in power-saving mode',
            after_title: 'After Disaster',
            after_1: 'Check self and neighbors for injuries; apply first aid',
            after_2: 'Photograph property damage for official assessment',
            after_3: 'Avoid downed power lines, cracked walls, and debris',
            after_4: 'Report new hazards or stranded victims immediately'
        },
        emergency_modal: {
            badge: 'Emergency Alert',
            radius_label: 'Affected Radius',
            severity_label: 'Severity Level',
            issued_time_label: 'Issued Time',
            source_authority_label: 'Source Authority',
            view_on_map_btn: 'View Affected Zone on Map',
            acknowledge_btn: 'Acknowledge & Dismiss'
        },
        emergency_banner: {
            headline: 'EMERGENCY BROADCAST: {type} • RADIUS: {radius}',
            view_on_map_btn: 'View on Map'
        }
    },

    // =========================================================================
    // HINDI (hi) — हिन्दी (Disaster Management Terminology)
    // =========================================================================
    hi: {
        app: {
            name: 'कोस्टवॉच',
            title: 'कोस्टवॉच — आपदा आसूचना एवं आपातकालीन मोचन मंच',
            headline: 'कोस्टवॉच आपातकालीन संचालन केंद्र',
            tagline: 'वास्तविक समय आपदा आसूचना, तटीय निगरानी एवं आपातकालीन मोचन नेटवर्क।',
            quick_menu_title: 'त्वरित संचालन मेनू'
        },
        auth: {
            portal_title: 'सुरक्षित प्रवेश पोर्टल',
            portal_subtitle: 'अधिकृत कर्मी एवं आपातकालीन मोचन कमान नेटवर्क',
            access_code_placeholder: 'एक्सेस कोड दर्ज करें',
            toggle_password: 'पासवर्ड दिखाएं / छिपाएं',
            invalid_code: 'अमान्य एक्सेस कोड। कृपया क्रेडेंशियल जांचें और पुनः प्रयास करें।',
            access_console_btn: 'कमांड कंसोल में प्रवेश करें',
            welcome_user: 'स्वागत है, नागरिक',
            welcome_admin: 'स्वागत है, प्रशासक',
            trust_score: 'विश्वसनीयता स्कोर',
            status_online: 'ऑनलाइन',
            status_live: 'लाइव',
            logout: 'लॉगआउट'
        },
        menu: {
            latest_alerts: 'नवीनतम अलर्ट',
            live_gis_map: 'लाइव जीआईएस मानचित्र',
            sos_distress: 'एसओएस / आपातकालीन संकट',
            helpline_dir: 'हेल्पलाइन निर्देशिका',
            find_shelters: 'सुरक्षित आश्रय खोजें',
            weather_conditions: 'मौसम व समुद्री स्थिति',
            community_intel: 'समुदाय आसूचना',
            future_risk: 'भविष्य आपदा जोखिम अनुमान',
            safety_protocols: 'आपदा सुरक्षा प्रोटोकॉल'
        },
        nav: {
            map: 'लाइव मानचित्र',
            report: 'आपदा रिपोर्ट करें',
            sos: 'आपातकालीन एसओएस',
            social: 'सोशल फीड',
            shelters: 'आश्रय खोजें',
            risk: 'जोखिम अनुमान',
            safety: 'सुरक्षा निर्देश',
            dashboard: 'डैशबोर्ड'
        },
        map: {
            title: 'लाइव आपदा जीआईएस मानचित्र',
            subtitle: 'निगरानी क्षेत्रों में वास्तविक समय आपदा गतिविधि और बहु-स्रोत आसूचना',
            active_hazards_count: 'सक्रिय आपदाएं: {count}',
            filter_all_severities: 'सभी गंभीरता स्तर',
            filter_high_risk: 'उच्च जोखिम (🔴)',
            filter_medium_risk: 'मध्यम जोखिम (🟠)',
            filter_low_risk: 'कम जोखिम (🟢)',
            filter_all_hazards: 'सभी आपदा प्रकार',
            filter_floods: 'बाढ़ / जलभराव',
            filter_cyclones: 'चक्रवात / तूफान',
            filter_tsunami: 'सुनामी / तटीय लहरें',
            filter_fires: 'आग / अग्निकांड',
            verified_recent_incidents: 'सत्यापित हालिया घटनाएं',
            active_alert_badge: 'सक्रिय चेतावनी',
            verified_badge: 'सत्यापित ({score}%)',
            reporter_label: 'रिपोर्टर: {name}',
            risk_label: '{severity} जोखिम',
            reports_count: '{count} रिपोर्ट'
        },
        report: {
            title: 'घटना की रिपोर्ट दर्ज करें',
            subtitle: 'एआई सत्यापन और त्वरित सहायता हेतु फ़ोटो/वीडियो के साथ जमीनी आपदा आसूचना सबमिट करें',
            hazard_type_label: '01 — आपदा वर्गीकरण',
            hazard_type_select: 'आपदा श्रेणी चुनें',
            hazard_cyclone: 'चक्रवात / प्रचंड तूफान',
            hazard_fire: 'आग / औद्योगिक दुर्घटना',
            hazard_flood: 'तटीय / शहरी बाढ़',
            hazard_earthquake: 'भूकंप / झटके',
            hazard_landslide: 'भूस्खलन / तटीय कटाव',
            hazard_other: 'अन्य आपातकालीन घटना',
            location_label: '02 — घटना स्थल',
            location_placeholder: 'स्थल का नाम या लैंडमार्क दर्ज करें',
            gps_btn: 'जीपीएस',
            severity_label: '03 — गंभीरता का आकलन',
            severity_low_title: 'निम्न गंभीरता',
            severity_low_desc: 'मामूली व्यवधान / सतर्कता',
            severity_medium_title: 'मध्यम गंभीरता',
            severity_medium_desc: 'खतरनाक / त्वरित कार्रवाई आवश्यक',
            severity_high_title: 'उच्च / गंभीर स्तर',
            severity_high_desc: 'जानलेवा / अति-संवेदनशील व तत्काल',
            description_label: '04 — स्थिति का विवरण',
            description_placeholder: 'आपदा की स्थिति, फंसे हुए लोग, जलभराव या अवरुद्ध मार्गों का विस्तृत विवरण लिखें...',
            evidence_label: '05 — साक्ष्य अपलोड (एआई सत्यापन)',
            evidence_drop_title: 'फ़ोटो/वीडियो साक्ष्य चुनें या यहाँ खींचें',
            evidence_drop_subtitle: 'समर्थित प्रारूप: JPG, PNG, MP4, MOV (अधिकतम 10MB प्रति फ़ाइल)',
            submit_btn: 'आपदा आसूचना रिपोर्ट सबमिट करें',
            submitting_btn: 'सबमिट किया जा रहा है...',
            fill_required_fields: 'कृपया गंभीरता सहित सभी अनिवार्य फ़ील्ड भरें।',
            report_submitted_success: 'आपदा रिपोर्ट सफलतापूर्वक सबमिट हो गई!',
            report_saved_trust: 'रिपोर्ट सहेजी गई (आईडी: {id})। {trust}',
            trust_points_bonus: '+{points} विश्वसनीयता अंक'
        },
        ai: {
            analyzing: 'एआई साक्ष्य का विश्लेषण कर रहा है…',
            consistent: 'साक्ष्य रिपोर्ट से सुसंगत है',
            needs_human: 'मानव सत्यापन आवश्यक है',
            inconclusive: 'साक्ष्य अनिर्णायक है',
            evidence_matches: 'साक्ष्य आपके द्वारा रिपोर्ट किए गए आपदा प्रकार से मेल खाता है।',
            evidence_flagged: 'साक्ष्य स्पष्ट रूप से मेल नहीं खाता — समीक्षा के लिए चिह्नित किया गया।',
            evidence_unclassified: 'एआई साक्ष्य का वर्गीकरण करने में असमर्थ रहा।',
            detected: 'पहचाना गया: {label}',
            confidence: 'सटीकता: {conf}%',
            trust_bonus: '+{bonus} विश्वसनीयता'
        },
        sos: {
            title: 'आपातकालीन संकट एसओएस हब',
            subtitle: 'वास्तविक समय संकट प्रसारण, जीपीएस पिनपॉइंटिंग और आपदा राहत कमान से सीधा संपर्क',
            hero_desc: 'एसओएस सक्रिय करने पर आपके सटीक जीपीएस निर्देशांकों के साथ कोस्टवॉच कमान केंद्र को संकट संदेश (Beacon) प्रसारित होता है। जीवन रक्षा के लिए तत्काल डायल करें:',
            tap_for_help: 'मदद के लिए दबाएं',
            sos_live: 'एसओएस सक्रिय',
            status_below: 'स्थिति नीचे देखें',
            registering: 'पंजीकरण हो रहा है…',
            please_wait: 'कृपया प्रतीक्षा करें',
            retry_sos: 'पुनः प्रयास करें',
            tap_to_retry: 'दबाकर पुनः भेजें',
            sos_resolved: 'एसओएस निराकृत',
            case_closed: 'मामला बंद',
            tracker_title: 'लाइव संकट घटना ट्रैकर',
            ref_id_label: 'एसओएस संदर्भ पहचान संख्या',
            activated_at: 'सक्रियण समय: {time}',
            location_captured_title: 'स्थान दर्ज किया गया',
            near_location: '{name} के समीप (≈{dist} किमी)',
            coords_captured: 'जीपीएस निर्देशांक दर्ज',
            open_google_maps: 'गूगल मैप्स में खोलें',
            location_unavailable_title: 'स्थान अनुपलब्ध',
            location_unavailable_desc: 'जीपीएस सिग्नल प्राप्त नहीं हो सका। अधिकारी आपके स्थान की पुष्टि हेतु संपर्क करेंगे। यदि संभव हो, 112 पर कॉल कर अपना स्थान बताएं।',
            authority_notes_title: 'कमान संचालक के आधिकारिक निर्देश',
            warn_no_location: 'स्थान साझा नहीं हुआ। जब बचाव दल संपर्क करे, तो अपना सटीक स्थान, निकटतम लैंडमार्क और दृश्य पहचान बताएं।',
            warn_pending_ack: 'कमान अधिकारी की स्वीकृति की प्रतीक्षा है। यह पुष्टि करता है कि संचालक ने आपका संकट संदेश देख लिया है।',
            reset_btn: 'डिवाइस एसओएस ट्रैकिंग रीसेट करें',
            reset_confirm: 'रीसेट करने से इस डिवाइस पर ट्रैकिंग बंद हो जाएगी। आपातकालीन सेवाएं अभी भी सक्रिय हो सकती हैं। क्या आप जारी रखना चाहते हैं?',
            reset_done: 'इस डिवाइस पर एसओएस ट्रैकिंग रीसेट कर दी गई है।',
            sos_active_already: 'एसओएस पहले से सक्रिय है! राहत दल रास्ते में है। स्थिति अपडेट हो रही है।',
            failed_register: 'एसओएस पंजीकरण विफल',
            floating_tooltip: 'आपातकालीन एसओएस — तत्काल सहायता हेतु टैप करें',

            info_title: 'आपातकालीन जानकारी एवं परिचालन दिशानिर्देश',
            info_gps_title: 'सटीक जीपीएस पिनपॉइंट',
            info_gps_desc: 'सर्च एवं रेस्क्यू टीमों को सटीक नेविगेशन प्रदान करने हेतु आपके निर्देशांक दर्ज किए जाते हैं।',
            info_id_title: 'विशिष्ट एसओएस संदर्भ आईडी',
            info_id_desc: 'आधिकारिक बचाव कर्मियों या हेल्पलाइन से बात करते समय प्राथमिकता समन्वय हेतु अपनी एसओएस आईडी बताएं।',
            info_eoc_title: 'ईओसी सीधा प्रेषण कतार',
            info_eoc_desc: 'संकट संदेश तत्काल प्राधिकरण आपातकालीन संचालन केंद्र कतार में वास्तविक समय स्थिति के साथ दिखाई देते हैं।',
            info_peril_title: 'गंभीर जीवन संकट (112 डायल करें)',
            info_peril_desc: 'तत्काल जानलेवा आपात स्थितियों में डिजिटल एसओएस के साथ-साथ हमेशा 112 पर कॉल करें।',

            helpline_title: 'राष्ट्रीय आपातकालीन हेल्पलाइन निर्देशिका',
            helpline_subtitle: '24/7 आपदा प्रबंधन एजेंसियों, समुद्री बचाव और नागरिक संकट सहायता से सीधा संपर्क।',
            cat_first_responders: 'राष्ट्रीय प्रथम मोचक दल (First Responders)',
            hl_112_desc: 'अखिल भारतीय आपात नंबर (24/7)',
            hl_100_desc: 'पुलिस नियंत्रण कक्ष',
            hl_101_desc: 'अग्निशमन एवं बचाव',
            hl_108_desc: 'एम्बुलेंस / चिकित्सा आपात',
            cat_disaster_auth: 'आपदा प्रबंधन प्राधिकरण',
            hl_ndma_desc: 'एनडीएमए नियंत्रण कक्ष',
            hl_ndrf_desc: 'एनडीआरएफ मुख्यालय',
            hl_state_desc: 'राज्य आपदा नियंत्रण कक्ष',
            hl_district_desc: 'जिला आपदा हेल्पलाइन',
            cat_coast_guard: 'तटरक्षक बल एवं समुद्री सुरक्षा',
            hl_cg_emergency: 'तटरक्षक बल आपातकालीन',
            hl_maritime_rescue: 'समुद्री खोज व बचाव',
            hl_fishermen: 'मछुआरा हेल्पलाइन',
            hl_port_emergency: 'बंदरगाह आपातकालीन',
            cat_crisis_support: 'संकट एवं विशेष सहायता',
            hl_psy_support: 'मनोवैज्ञानिक सहायता',
            hl_women: 'महिला हेल्पलाइन',
            hl_child: 'बाल सहायता हेल्पलाइन',
            hl_traffic: 'आपातकालीन यातायात',

            quick_actions_title: 'त्वरित आपातकालीन कदम',
            action_1_title: '1. शांत रहें और बैटरी बचाएं',
            action_1_desc: 'फ़ोन को पावर-सेविंग मोड में रखें और स्क्रीन की ब्राइटनेस कम करें।',
            action_2_title: '2. ऊंचे स्थानों पर जाएं',
            action_2_desc: 'सुनामी या बाढ़ चेतावनी होने पर तुरंत अंतर्देशीय या सुरक्षित बहुमंजिला आश्रयों की ओर जाएं।',
            action_3_title: '3. निचले मार्गों से बचें',
            action_3_desc: 'जलभराव वाली सड़कों, पुलिया या टूटे बिजली के तारों के पास से न गुजरें।'
        },
        sos_status: {
            PENDING: 'संकट संदेश भेजा गया',
            ACKNOWLEDGED: 'प्राधिकरण द्वारा संज्ञान लिया गया',
            IN_PROGRESS: 'राहत कार्य प्रगति पर',
            RESCUE_ASSIGNED: 'बचाव दल तैनात',
            RESOLVED: 'निराकृत / सुरक्षित',
            step_label: 'चरण {step} · {status}',
            in_progress_text: 'प्रगति पर…'
        },
        sos_notes: {
            PENDING: 'आपका संकट संदेश कोस्टवॉच आपातकालीन प्रणाली को भेज दिया गया है।',
            ACKNOWLEDGED: 'एक अधिकृत संचालक ने आपके एसओएस संकेत का संज्ञान ले लिया है।',
            IN_PROGRESS: 'आपातकालीन राहत दल सक्रिय हो रहे हैं। शांत रहें और अपना फ़ोन चालू रखें।',
            RESCUE_ASSIGNED: 'एक समर्पित बचाव दल आपके स्थान की ओर रवाना कर दिया गया है।',
            RESOLVED: 'इस एसओएस मामले को सुरक्षित रूप से निराकृत चिह्नित किया गया है। सुरक्षित रहें।'
        },
        social: {
            title: 'सोशल मीडिया आपदा आसूचना एवं संकेत पहचान',
            subtitle: 'वास्तविक समय सोशल मीडिया स्कैनिंग, एनएलपी निष्कर्षण, विश्वसनीयता समूहन एवं सत्यापन',
            demo_banner_simulated: 'डेमो मोड • सिम्युलेटेड सोशल सिग्नल स्ट्रीम',
            demo_banner_live: 'लाइव एक्स (X) डेटा • आधिकारिक एपीआई',
            stat_total: 'कुल संकेत',
            stat_total_sub: 'एकत्रित कुल आसूचना पोस्ट',
            stat_new: 'नए संकेत',
            stat_new_sub: 'एनएलपी वर्गीकरण लंबित',
            stat_review: 'समीक्षाधीन',
            stat_review_sub: 'पुष्टि प्रक्रिया जारी',
            stat_verified: 'सत्यापित',
            stat_verified_sub: 'पुष्ट जमीनी आपदाएं',
            filters_label: 'फ़िल्टर:',
            filter_all_status: 'सभी स्थितियां',
            filter_status_new: 'नया (New)',
            filter_status_review: 'समीक्षाधीन (Under Review)',
            filter_status_verified: 'सत्यापित (Verified)',
            filter_status_dismissed: 'खारिज (Dismissed)',
            filter_all_hazards: 'सभी आपदाएं',
            filter_flood: 'बाढ़',
            filter_earthquake: 'भूकंप',
            filter_cyclone: 'चक्रवात',
            filter_fire: 'आग',
            filter_landslide: 'भूस्खलन',
            refresh_signals_btn: 'सिग्नल रीफ़्रेश करें',
            analyzing_stream: 'सोशल सिग्नल स्ट्रीम का विश्लेषण जारी है...',
            no_signals_match: 'फ़िल्टर से मेल खाता कोई संकेत नहीं मिला।',
            btn_review: 'समीक्षा करें',
            btn_verify: 'सत्यापित करें',
            btn_dismiss: 'खारिज करें',
            confidence_label: 'सटीकता:',
            corroboration_label: 'पुष्टि संख्या:',
            hazard_label: 'आपदा:',
            location_label: 'स्थान:'
        },
        dashboard: {
            title: 'आपातकालीन संचालन केंद्र (EOC) डैशबोर्ड',
            subtitle: 'वास्तविक समय घटना निगरानी, सार्वजनिक अलर्ट प्रसारण एवं सक्रिय एसओएस कतार प्रबंधन',
            stat_total_reports: 'कुल रिपोर्ट',
            stat_total_reports_sub: 'नागरिक व सेंसर रिपोर्ट',
            stat_high_priority: 'उच्च प्राथमिकता',
            stat_high_priority_sub: 'तत्काल कार्रवाई आवश्यक',
            stat_verified_reports: 'सत्यापित रिपोर्ट',
            stat_verified_reports_sub: 'एआई/प्राधिकरण द्वारा सत्यापित',
            stat_active_users: 'सक्रिय कर्मी',
            stat_active_users_sub: 'फील्ड रेस्पॉन्डर व नागरिक',
            stat_active_incidents: 'सक्रिय घटनाएं',
            stat_active_incidents_sub: 'असमाधानित आपदा क्षेत्र',

            broadcast_card_title: 'सार्वजनिक आपातकालीन चेतावनी प्रसारित करें',
            disaster_type_label: 'आपदा श्रेणी',
            alert_cyclone: 'चक्रवात / प्रचंड तूफान',
            alert_tsunami: 'सुनामी / तटीय ऊंची लहरें',
            alert_flood: 'तटीय / शहरी बाढ़',
            alert_storm: 'गंभीर समुद्री आंधी / तूफान',
            alert_fire: 'आग / औद्योगिक खतरा',
            alert_emergency: 'सामान्य तटीय आपातकाल',
            alert_level_label: 'चेतावनी स्तर',
            level_warning: 'चेतावनी (उच्च प्राथमिकता - Warning)',
            level_watch: 'निगरानी (मध्यम सतर्कता - Watch)',
            level_advisory: 'सलाह (सूचनात्मक - Advisory)',
            level_emergency: 'आपातकालीन संकट (तत्काल कार्रवाई - Emergency)',
            radius_label: 'प्रसारण दायरा (किमी)',
            message_label: 'आपातकालीन चेतावनी संदेश एवं निकासी सलाह',
            message_placeholder: 'प्रभावित क्षेत्र के लिए प्रसारण संदेश दर्ज करें (उदा. तटीय क्षेत्र में प्रचंड चक्रवात आने की संभावना है। कृपया सुरक्षित स्थानों पर जाएं।)...',
            transmit_btn: 'आपातकालीन प्रसारण जारी करें',
            transmitting_btn: 'आपातकालीन चेतावनी प्रसारित की जा रही है...',
            transmit_success: '✓ आपातकालीन प्रसारण सभी सक्रिय स्टेशनों को भेज दिया गया।',

            broadcasts_queue_title: 'सक्रिय चेतावनी प्रसारण',
            broadcasts_queue_hint: 'अलर्ट समाप्त करने पर नागरिकों की स्क्रीन, बैनर और जीआईएस मानचित्र से चेतावनी तुरंत हट जाती है।',
            refresh_broadcasts_btn: 'प्रसारण रीफ़्रेश करें',
            no_broadcasts_on_air: 'वर्तमान में कोई सक्रिय प्रसारण ऑन-एयर नहीं है।',
            on_air_badge: 'ऑन एयर',
            terminate_btn: 'चेतावनी समाप्त करें',
            terminate_confirm: 'क्या आप वाकई इस आपातकालीन प्रसारण को समाप्त करना चाहते हैं? यह सभी नागरिक स्क्रीनों और मानचित्र से तुरंत हटा दिया जाएगा।',

            sos_queue_title: 'सक्रिय एसओएस आपातकालीन कतार',
            sos_queue_hint: 'निराकृत घटनाएं सक्रिय प्रेषण सूची से स्वचालित रूप से हट जाती हैं।',
            filter_sos_active: 'सक्रिय',
            filter_sos_resolved: 'निराकृत',
            filter_sos_all: 'सभी',
            refresh_sos_btn: 'कतार रीफ़्रेश करें',
            loading_sos_queue: 'एसओएस कतार लोड हो रही है…',
            no_active_sos: 'कोई सक्रिय एसओएस आपात स्थिति नहीं',
            no_active_sos_desc: 'सभी घटनाएं निराकृत हैं। नया अलर्ट आने पर यहाँ तुरंत प्रदर्शित होगा।',
            no_resolved_sos: 'कोई निराकृत एसओएस रिकॉर्ड में नहीं है।',
            no_sos_recorded: 'कोई एसओएस घटना दर्ज नहीं है।',
            mark_step: 'अवस्था बदलें: {status}',
            skip_change_status: 'अन्य अवस्था में बदलें',
            resolve_auto_remove: 'निराकृत करें व हटाएं',
            edit_notes_btn: 'नोट्स संपादित करें',
            delete_record_btn: 'रिकॉर्ड हटाएं',
            purge_resolved_btn: 'सभी {count} निराकृत रिकॉर्ड साफ़ करें',
            tile_awaiting_ack: 'स्वीकृति प्रतीक्षित',
            tile_in_progress: 'स्वीकृत / प्रगति पर',
            tile_rescue_assigned: 'बचाव दल तैनात',
            tile_resolved: 'निराकृत',
            tile_total_all_time: 'कुल (अब तक)',
            tile_active_in_queue: 'सक्रिय (कतार में)'
        },
        risk: {
            title: 'भविष्य आपदा जोखिम सूचकांक आकलन',
            subtitle: 'इसरो/नासा के बहु-दशकीय ऐतिहासिक आपदा कैटलॉग को लाइव मौसम एवं पर्यावरणीय संकेतों के साथ जोड़ता है',
            parameters_title: 'स्थान जोखिम मूल्यांकन पैरामीटर',
            parameters_desc: 'निर्देशांक दर्ज करें या जीपीएस चुनें। प्रणाली ऐतिहासिक आपदा क्लस्टर और सक्रिय मौसम कारकों का विश्लेषण करती है। डेटा अपर्याप्त होने पर अनुमान सुरक्षित रूप से रोक दिया जाता है।',
            latitude_label: 'अक्षांश (Latitude)',
            longitude_label: 'देशांतर (Longitude)',
            radius_label: 'खोज दायरा (किमी)',
            horizon_label: 'योजना समय सीमा (घंटे)',
            location_name_label: 'स्थान का नाम / क्षेत्रीय पहचान (वैकल्पिक)',
            historical_title: 'प्रामाणिक ऐतिहासिक आपदा डेटा अंतर्ग्रहण',
            historical_desc: 'स्रोत: भारत बाढ़ एवं आपदा सूची (1967-2023) / एनआरएससी-इसरो व नासा EONET। शून्य बनावट के साथ वास्तविक रिकॉर्ड।',
            start_date_label: 'ऐतिहासिक प्रारंभ तिथि',
            end_date_label: 'ऐतिहासिक समाप्ति तिथि',
            use_gps_btn: 'वर्तमान जीपीएस लें',
            ingest_historical_btn: 'ऐतिहासिक डेटा प्राप्त करें',
            compute_risk_btn: 'जोखिम सूचकांक की गणना करें',
            scan_areas_btn: 'योग्य क्षेत्रों को स्कैन करें',
            risk_estimate_title: 'भविष्य जोखिम अनुमान',
            primary_hazard_indicator: 'प्रमुख आपदा संकेतक: {hazard}',
            historical_subscore: 'ऐतिहासिक उप-स्कोर',
            environmental_subscore: 'पर्यावरणीय उप-स्कोर',
            planning_time_window: 'नियोजन समय खिड़की',
            confidence_uncertainty: 'सटीकता / अनिश्चितता',
            main_factors_title: 'मुख्य योगदानकर्ता कारक',
            data_coverage_title: 'डेटा कवरेज',
            withheld_title: 'जोखिम अनुमान रोका गया',
            insufficient_data: 'अपर्याप्त डेटा',
            withheld_desc: 'भविष्य जोखिम स्कोर केवल तभी जारी किया जाता है जब पर्याप्त स्थानीय ऐतिहासिक रिकॉर्ड और वर्तमान मौसम अवलोकन उपलब्ध हों।',
            unmet_requirements: 'अपूर्ण डेटा आवश्यकताएं',
            how_to_enable: 'अनुमान कैसे सक्षम करें',
            how_to_enable_desc: 'इस क्षेत्र के लिए नासा EONET से प्रामाणिक ऐतिहासिक आपदा रिकॉर्ड लोड करने हेतु ऊपर "ऐतिहासिक डेटा प्राप्त करें" बटन दबाएं, या खोज दायरा बढ़ाएं।',
            method_disclaimer: 'यह भविष्य जोखिम स्कोर ऐतिहासिक रिकॉर्ड और वर्तमान मौसम संकेतों को मिलाने वाला एक संकेतक सूचकांक है। यह कोई गारंटीकृत आपदा भविष्यवाणी नहीं है।'
        },
        shelters: {
            title: 'इंटेलिजेंट सुरक्षित आश्रय मार्ग-निर्देशन',
            subtitle: 'बहु-मानदंड उपयुक्तता स्कोरिंग (क्षमता, स्थानीय जोखिम, सड़क सुगमता, आपदा निकटता व दूरी)',
            dev_preview_title: 'डेवलपमेंट पूर्वावलोकन डेटासेट',
            find_card_title: 'निकटतम सबसे सुरक्षित आश्रय खोजें',
            find_card_desc: 'कोस्टवॉच केवल दूरी नहीं बल्कि वास्तविक समय अधिभोग, पास के आपदा खतरों, सड़क रुकावटों और इलाके की सुरक्षा का विश्लेषण करता है।',
            latitude_label: 'आपका अक्षांश (Latitude)',
            longitude_label: 'आपका देशांतर (Longitude)',
            radius_label: 'खोज दायरा (किमी)',
            use_gps_btn: 'वर्तमान जीपीएस लें',
            rank_recommend_btn: 'आश्रयों को रैंक व अनुशंसित करें',
            best_recommended_title: 'सर्वोत्तम अनुशंसित सुरक्षित आश्रय',
            only_shelter_available: 'एकमात्र उपलब्ध आश्रय',
            alternative_shelters_title: 'वैकल्पिक रैंक किए गए आश्रय',
            suitability_score_label: 'उपयुक्तता स्कोर',
            occupancy_label: 'अधिभोग (Occupancy): {used}/{total}',
            spots_available: '{count} स्थान उपलब्ध',
            pct_full: '{pct}% भरा हुआ',
            amenities_title: 'उपलब्ध सुविधाएं',
            amenity_water: 'पीने का पानी',
            amenity_electricity: 'विद्युत आपूर्ति',
            amenity_food: 'भोजन व्यवस्था',
            amenity_first_aid: 'प्राथमिक चिकित्सा किट',
            amenity_medical: 'चिकित्सा कर्मी',
            amenity_sanitation: 'शौचालय व स्वच्छता',
            amenity_parking: 'पार्किंग',
            amenity_emergency_power: 'बैकअप जनरेटर',
            why_selected_title: 'इस आश्रय का चयन क्यों किया गया',
            score_breakdown_title: 'उपयुक्तता स्कोर का विस्तृत विवरण देखें ({count} कारक)',
            recommended_route_title: 'अनुशंसित सुरक्षित मार्ग',
            straight_distance: 'सीधी दूरी',
            road_distance: 'सड़क मार्ग दूरी',
            estimated_travel: 'अनुमानित यात्रा समय',
            road_status_label: 'सड़क की स्थिति',
            route_steps_title: 'मार्ग के चरण',
            get_directions_btn: 'दिशा-निर्देश प्राप्त करें',
            view_on_map_btn: 'मानचित्र पर देखें',
            last_updated: 'अंतिम अपडेट: {time}',
            status_open: 'खुला है (OPEN)',
            status_full: 'भरा हुआ (FULL)',
            status_closed: 'बंद (CLOSED)',
            status_evacuating: 'निकासी जारी (EVACUATING)',
            risk_low: 'निम्न जोखिम',
            risk_medium: 'मध्यम जोखिम',
            risk_high: 'उच्च जोखिम',
            risk_critical: 'अति-गंभीर जोखिम',
            road_open: 'सड़कें खुली हैं',
            road_restricted: 'सड़कें प्रतिबंधित हैं',
            road_blocked: 'सड़कें बंद / जलमग्न हैं',
            road_unknown: 'सड़क स्थिति अज्ञात',
            rating_excellent: 'उत्कृष्ट',
            rating_acceptable: 'स्वीकार्य',
            rating_poor: 'कमजोर',
            no_shelters_found: '{radius} किमी के दायरे में कोई सुलभ आश्रय नहीं मिला। कृपया खोज दायरा बढ़ाकर पुनः प्रयास करें।'
        },
        safety: {
            title: 'आपदा सुरक्षा दिशानिर्देश एवं त्वरित प्रतिक्रिया प्रोटोकॉल',
            subtitle: 'तटीय आपदाओं, चक्रवात, समुद्री लहरों और बाढ़ प्रबंधन हेतु प्रामाणिक राष्ट्रीय दिशानिर्देश',
            dos_title: 'महत्वपूर्ण क्या करें (DO\'S) — इन नियमों का पालन करें',
            do_1: 'आधिकारिक आपातकालीन प्रसारणों, मौसम बुलेटिनों और कोस्टवॉच अलर्ट पर लगातार नज़र रखें।',
            do_2: 'एक सीलबंद आपातकालीन बैग तैयार रखें (पीने का पानी, सूखा भोजन, टॉर्च, फर्स्ट-एड, पावर बैंक)।',
            do_3: 'सुनामी या तूफान की लहरों की चेतावनी जारी होते ही तुरंत ऊंचे स्थानों या पक्के आश्रयों में जाएं।',
            do_4: 'स्थानीय प्रशासन और एनडीआरएफ के निकासी आदेशों का बिना किसी देरी के तत्परता से पालन करें।',
            do_5: 'महत्वपूर्ण पहचान पत्र, दस्तावेज और दवाइयों को वाटरप्रूफ बैग में सुरक्षित रखें।',
            do_6: 'बच्चों, गर्भवती महिलाओं, बुजुर्गों और दिव्यांगों की निकासी सहायता को सर्वोच्च प्राथमिकता दें।',
            do_7: 'हाई टाइड या चक्रवात के दौरान समुद्र तटों, नदी मुहानों और उजागर तटीय सड़कों से दूर रहें।',

            donts_title: 'महत्वपूर्ण क्या न करें (DON\'TS) — इन गलतियों से बचें',
            dont_1: 'चेतावनी सक्रिय होने पर आधिकारिक सूचनाओं की अनदेखी न करें और निकासी में देरी न करें।',
            dont_2: 'तूफानी लहरों या चक्रवात का लैंडफॉल देखने समुद्र तट, बंदरगाह या सीवॉल पर न जाएं।',
            dont_3: 'जलभराव या बाढ़ से घिरे भवनों में बिजली के स्विच या उपकरणों को हाथ न लगाएं।',
            dont_4: 'सोशल मीडिया पर असत्यापित अफवाहें, भ्रामक पोस्ट या फर्जी संकट संदेश न फैलाएं।',
            dont_5: 'जलमग्न सड़कों या डूबे हुए पुलों पर वाहन चलाने या पैदल चलने का प्रयास कदापि न करें।',
            dont_6: 'पालतू जानवरों या मवेशियों को बांधकर न छोड़ें, उन्हें सुरक्षा हेतु खुला रखें।',
            dont_7: 'आपदा प्रबंधन अधिकारियों द्वारा सुरक्षित घोषित किए जाने से पहले क्षतिग्रस्त इमारतों में न लौटें।',

            phased_protocols_title: 'चरणबद्ध आपदा प्रबंधन प्रोटोकॉल',
            before_title: 'आपदा से पहले (Before Disaster)',
            before_1: 'प्राथमिक और द्वितीयक सुरक्षित निकासी मार्गों का पहले से मानचित्रण करें',
            before_2: 'पारिवारिक संचार और पुनर्मिलन की स्पष्ट योजना तैयार करें',
            before_3: 'गैर-खराब होने वाला भोजन और 3 दिनों के लिए स्वच्छ पेयजल संग्रहित करें',
            before_4: 'खुले फर्नीचर, टिन की छतों और ढीली वस्तुओं को मजबूती से बांधें',
            during_title: 'आपदा के दौरान (During Disaster)',
            during_1: 'कांच की खिड़कियों और ढीले छज्जों से दूर घर के सुरक्षित हिस्से में रहें',
            during_2: 'बैटरी से चलने वाले रेडियो और कोस्टवॉच अपडेट सुनते रहें',
            during_3: 'मुख्य बिजली का स्विच और एलपीजी सिलेंडर का रेगुलेटर तुरंत बंद करें',
            during_4: 'मोबाइल फ़ोन चार्ज रखें और कम-बिजली खपत मोड में उपयोग करें',
            after_title: 'आपदा के बाद (After Disaster)',
            after_1: 'अपनी और पड़ोसियों की चोटों की जांच करें; तुरंत प्राथमिक उपचार दें',
            after_2: 'सरकारी मुआवजे व आकलन हेतु संपत्ति की क्षति की तस्वीरें लें',
            after_3: 'टूटे बिजली के तारों, दरार वाली दीवारों और मलबे से दूर रहें',
            after_4: 'नए खतरों या फंसे हुए पीड़ितों की सूचना तुरंत कोस्टवॉच पर रिपोर्ट करें'
        },
        emergency_modal: {
            badge: 'आपातकालीन चेतावनी',
            radius_label: 'प्रभावित दायरा',
            severity_label: 'गंभीरता स्तर',
            issued_time_label: 'जारी होने का समय',
            source_authority_label: 'स्रोत प्राधिकरण',
            view_on_map_btn: 'मानचित्र पर प्रभावित क्षेत्र देखें',
            acknowledge_btn: 'स्वीकार करें एवं बंद करें'
        },
        emergency_banner: {
            headline: '🚨 आपातकालीन प्रसारण: {type} • दायरा: {radius}',
            view_on_map_btn: 'मानचित्र पर देखें'
        }
    },

    // =========================================================================
    // TAMIL (ta) — தமிழ்
    // =========================================================================
    ta: {
        app: {
            name: 'கோஸ்ட்வாட்ச்',
            title: 'கோஸ்ட்வாட்ச் — பேரிடர் புலனாய்வு & அவசரகால மீட்பு தளம்',
            headline: 'கோஸ்ட்வாட்ச் அவசரகால செயல்பாடுகள்',
            tagline: 'நிகழ்நேர பேரிடர் புலனாய்வு, கடலோர கண்காணிப்பு மற்றும் அவசரகால மீட்பு நெட்வொர்க்.',
            quick_menu_title: 'விரைவு செயல்பாடுகள் மெனு'
        },
        auth: {
            portal_title: 'பாதுகாப்பான அணுகல் போர்டல்',
            portal_subtitle: 'அங்கீகரிக்கப்பட்ட பணியாளர்கள் & அவசரகால கட்டுப்பாட்டு நெட்வொர்க்',
            access_code_placeholder: 'அணுகல் குறியீட்டை உள்ளிடவும்',
            toggle_password: 'கடவுச்சொல்லைக் காட்டு / மறை',
            invalid_code: 'தவறான அணுகல் குறியீடு. சரிபார்த்து மீண்டும் முயற்சிக்கவும்.',
            access_console_btn: 'கட்டளை முனையத்தை அணுகவும்',
            welcome_user: 'வரவேற்கிறோம், பயனர்',
            welcome_admin: 'வரவேற்கிறோம், நிர்வாகி',
            trust_score: 'நம்பகத்தன்மை மதிப்பெண்',
            status_online: 'ஆன்லைன்',
            status_live: 'நேரலை',
            logout: 'வெளியேறு'
        },
        menu: {
            latest_alerts: 'சமீபத்திய எச்சரிக்கைகள்',
            live_gis_map: 'நேரலை ஜி.ஐ.எஸ் வரைபடம்',
            sos_distress: 'SOS / அவசர ஆபத்து',
            helpline_dir: 'உதவி எண் கையேடு',
            find_shelters: 'பாதுகாப்பான புகலிடங்கள்',
            weather_conditions: 'வானிலை & கடல் நிலைமை',
            community_intel: 'சமூக புலனாய்வு',
            future_risk: 'எதிர்கால ஆபத்து மதிப்பீடு',
            safety_protocols: 'பேரிடர் பாதுகாப்பு நெறிமுறைகள்'
        },
        nav: {
            map: 'நேரலை வரைபடம்',
            report: 'ஆபத்தை புகாரளி',
            sos: 'அவசர SOS',
            social: 'சமூக ஊடகம்',
            shelters: 'புகலிடம் காண்க',
            risk: 'ஆபத்து மதிப்பீடு',
            safety: 'பாதுகாப்பு குறிப்புகள்',
            dashboard: 'டாஷ்போர்டு'
        },
        map: {
            title: 'நேரலை பேரிடர் ஜி.ஐ.எஸ் வரைபடம்',
            subtitle: 'கண்காணிக்கப்படும் பகுதிகளில் நிகழ்நேர பேரிடர் செயல்பாடுகள் மற்றும் புலனாய்வு',
            active_hazards_count: 'செயலில் உள்ள ஆபத்துகள்: {count}',
            filter_all_severities: 'அனைத்து தீவிர நிலைகளும்',
            filter_high_risk: 'அதிக ஆபத்து (🔴)',
            filter_medium_risk: 'நடுத்தர ஆபத்து (🟠)',
            filter_low_risk: 'குறைந்த ஆபத்து (🟢)',
            filter_all_hazards: 'அனைத்து ஆபத்து வகைகள்',
            filter_floods: 'வெள்ளம்',
            filter_cyclones: 'புயல் / சூறாவளி',
            filter_tsunami: 'சுனாமி / கடல் சீற்றம்',
            filter_fires: 'தீ விபத்து',
            verified_recent_incidents: 'சரிபார்க்கப்பட்ட சமீபத்திய நிகழ்வுகள்',
            active_alert_badge: 'செயலில் உள்ள எச்சரிக்கை',
            verified_badge: 'சரிபார்க்கப்பட்டது ({score}%)',
            reporter_label: 'புகாரளிப்பவர்: {name}',
            risk_label: '{severity} ஆபத்து',
            reports_count: '{count} அறிக்கைகள்'
        },
        report: {
            title: 'பேரிடர் நிகழ்வை புகாரளிக்கவும்',
            subtitle: 'AI சரிபார்ப்பு மற்றும் விரைவு நடவடிக்கைக்காக புகைப்பட/வீடியோ ஆதாரங்களுடன் நிலவரத்தை சமர்ப்பிக்கவும்',
            hazard_type_label: '01 — ஆபத்து வகைப்பாடு',
            hazard_type_select: 'ஆபத்து வகையைத் தேர்ந்தெடுக்கவும்',
            hazard_cyclone: 'புயல் / கடும் சூறாவளி',
            hazard_fire: 'தீ / தொழில்துறை விபத்து',
            hazard_flood: 'கடலோர / நகர்ப்புற வெள்ளம்',
            hazard_earthquake: 'நிலநடுக்கம்',
            hazard_landslide: 'நிலச்சரிவு / கடலரிப்பு',
            hazard_other: 'பிற அவசர நிகழ்வுகள்',
            location_label: '02 — நிகழ்வு இடம்',
            location_placeholder: 'அடையாளம் அல்லது இடத்தின் பெயரை உள்ளிடவும்',
            gps_btn: 'GPS',
            severity_label: '03 — தீவிர மதிப்பீடு',
            severity_low_title: 'குறைந்த தீவிரம்',
            severity_low_desc: 'சிறிய இடையூறு / எச்சரிக்கை',
            severity_medium_title: 'நடுத்தர தீவிரம்',
            severity_medium_desc: 'ஆபத்தானது / உடனடி பதில் தேவை',
            severity_high_title: 'அதிதீவிர / அபாயகரமானது',
            severity_high_desc: 'உயிருக்கு ஆபத்தானது / மிக அவசரம்',
            description_label: '04 — சூழ்நிலை விளக்கம்',
            description_placeholder: 'பேரிடர் நிலை, சிக்கியுள்ள மக்கள், சாலை அடைப்புகள் போன்றவற்றை விவரிக்கவும்...',
            evidence_label: '05 — ஆதார பதிவேற்றம் (AI சரிபார்ப்பு)',
            evidence_drop_title: 'புகைப்படம்/வீடியோவை இழுத்து விடவும் அல்லது தேர்ந்தெடுக்கவும்',
            evidence_drop_subtitle: 'ஆதரிக்கப்படும் வடிவங்கள்: JPG, PNG, MP4, MOV (அதிகபட்சம் 10MB)',
            submit_btn: 'பேரிடர் அறிக்கையை சமர்ப்பிக்கவும்',
            submitting_btn: 'சமர்ப்பிக்கப்படுகிறது...',
            fill_required_fields: 'தேவையான அனைத்து புலங்களையும் நிரப்பவும்.',
            report_submitted_success: 'பேரிடர் அறிக்கை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!',
            report_saved_trust: 'அறிக்கை சேமிக்கப்பட்டது (ID: {id}). {trust}',
            trust_points_bonus: '+{points} நம்பிக்கை புள்ளிகள்'
        },
        sos: {
            title: 'அவசரகால SOS மையம்',
            subtitle: 'நிகழ்நேர அவசர சமிக்ஞை ஒளிபரப்பு மற்றும் நேரடி மீட்புப் படை தொடர்பு',
            hero_desc: 'SOS-ஐ இயக்குவது உங்கள் துல்லியமான ஆயத்தொலைவுகளுடன் அவசர எச்சரிக்கையை கட்டுப்பாட்டு மையத்திற்கு அனுப்பும். உயிருக்கு உடனடி ஆபத்து ஏற்பட்டால் அழைக்கவும்:',
            tap_for_help: 'உதவிக்கு தட்டவும்',
            sos_live: 'SOS நேரலை',
            status_below: 'நிலை கீழே உள்ளது',
            registering: 'பதிவு செய்யப்படுகிறது…',
            please_wait: 'காத்திருக்கவும்',
            retry_sos: 'மீண்டும் முயற்சிக்கவும்',
            tap_to_retry: 'மீண்டும் அழுத்தவும்',
            sos_resolved: 'SOS தீர்க்கப்பட்டது',
            case_closed: 'வழக்கு முடிந்தது',
            tracker_title: 'நேரலை அவசர நிகழ்வு கண்காணிப்பு',
            ref_id_label: 'SOS குறிப்பு எண்',
            activated_at: 'இயக்கப்பட்ட நேரம்: {time}',
            location_captured_title: 'இடம் கண்டறியப்பட்டது',
            near_location: '{name} அருகில் (≈{dist} கி.மீ)',
            coords_captured: 'ஆயத்தொலைவுகள் பெறப்பட்டன',
            open_google_maps: 'கூகிள் வரைபடத்தில் பார்க்கவும்',
            location_unavailable_title: 'இடம் கிடைக்கவில்லை',
            location_unavailable_desc: 'GPS இருப்பிடத்தை பெற முடியவில்லை. அதிகாரிகள் உங்களை தொடர்புகொள்வார்கள். இயன்றால் 112 ஐ அழைக்கவும்.',
            authority_notes_title: 'அதிகாரிகளின் குறிப்புகள்',
            warn_no_location: 'இருப்பிடம் பகிரப்படவில்லை. அதிகாரிகள் அழைக்கும் போது, உங்கள் சரியான இருப்பிடத்தைக் குறிப்பிடவும்.',
            warn_pending_ack: 'அதிகாரிகளின் ஒப்புதலுக்காக காத்திருக்கிறது.',
            reset_btn: 'SOS கண்காணிப்பை மீட்டமைக்கவும்',
            reset_confirm: 'மீட்டமைக்க விரும்புகிறீர்களா?',
            reset_done: 'SOS கண்காணிப்பு மீட்டமைக்கப்பட்டது.',
            sos_active_already: 'SOS ஏற்கனவே செயலில் உள்ளது! உதவி விரைந்து வருகிறது.',
            failed_register: 'SOS பதிவு தோல்வியடைந்தது',
            floating_tooltip: 'அவசர SOS — உடனடி உதவிக்கு தட்டவும்',
            info_title: 'அவசர வழிகாட்டுதல்கள்',
            info_gps_title: 'துல்லியமான ஜிபிஎஸ்',
            info_gps_desc: 'மீட்புக் குழுக்கள் விரைந்து வர உங்கள் ஆயத்தொலைவுகள் பதிவு செய்யப்படுகின்றன.',
            info_id_title: 'தனித்துவமான SOS ஐடி',
            info_id_desc: 'உதவி எண்களை தொடர்பு கொள்ளும்போது உங்கள் SOS ஐடியை கூறவும்.',
            info_eoc_title: 'நேரடி EOC வரிசை',
            info_eoc_desc: 'அவசர சமிக்ஞைகள் உடனடியாக அதிகாரிகளின் கட்டுப்பாட்டு மையத்தில் தோன்றும்.',
            info_peril_title: 'உயிர் ஆபத்து (112 ஐ அழைக்கவும்)',
            info_peril_desc: 'உடனடி ஆபத்துகளுக்கு எப்போதும் 112 ஐ அழைக்கவும்.',
            helpline_title: 'தேசிய அவசர உதவி எண்கள்',
            helpline_subtitle: '24/7 பேரிடர் மீட்பு அமைப்புகள் மற்றும் அவசர உதவி எண்கள்.',
            cat_first_responders: 'முதன்மைக் குழுக்கள்',
            hl_112_desc: 'அனைத்து அவசரநிலைகள் (24/7)',
            hl_100_desc: 'காவல்துறை',
            hl_101_desc: 'தீயணைப்பு',
            hl_108_desc: 'ஆம்புலன்ஸ்',
            cat_disaster_auth: 'பேரிடர் ஆணையங்கள்',
            hl_ndma_desc: 'NDMA கட்டுப்பாட்டு மையம்',
            hl_ndrf_desc: 'NDRF தலைமையகம்',
            hl_state_desc: 'மாநில பேரிடர் மையம்',
            hl_district_desc: 'மாவட்ட உதவி எண்',
            cat_coast_guard: 'கடலோர காவல்படை',
            hl_cg_emergency: 'கடலோர காவல்படை அவசரம்',
            hl_maritime_rescue: 'கடல்சார் மீட்பு',
            hl_fishermen: 'மீனவர் உதவி எண்',
            hl_port_emergency: 'துறைமுக அவசரம்',
            cat_crisis_support: 'சிறப்பு உதவி',
            hl_psy_support: 'மனநல ஆலோசனை',
            hl_women: 'பெண்கள் உதவி எண்',
            hl_child: 'குழந்தைகள் உதவி எண்',
            hl_traffic: 'போக்குவரத்து அவசரம்',
            quick_actions_title: 'விரைவு பாதுகாப்பு நடவடிக்கைகள்',
            action_1_title: '1. அமைதியாக இருந்து பேட்டரியை சேமிக்கவும்',
            action_1_desc: 'போன்களை பவர் சேவிங் முறையில் வைக்கவும்.',
            action_2_title: '2. மேடான இடங்களுக்கு செல்லவும்',
            action_2_desc: 'சுனாமி, வெள்ள எச்சரிக்கையின் போது உடனடியாக மேடான பகுதிகளுக்கு செல்லவும்.',
            action_3_title: '3. தாழ்வான சாலைகளை தவிர்க்கவும்',
            action_3_desc: 'தேங்கிய வெள்ள நீரில் வாகனங்களை இயக்க வேண்டாம்.'
        },
        sos_status: {
            PENDING: 'SOS சமர்ப்பிக்கப்பட்டது',
            ACKNOWLEDGED: 'அதிகாரிகளால் ஏற்கப்பட்டது',
            IN_PROGRESS: 'மீட்பு நடவடிக்கை தொடர்கிறது',
            RESCUE_ASSIGNED: 'மீட்புக் குழு நியமிக்கப்பட்டது',
            RESOLVED: 'தீர்க்கப்பட்டது',
            step_label: 'படி {step} · {status}',
            in_progress_text: 'செயல்பாட்டில்…'
        },
        sos_notes: {
            PENDING: 'உங்கள் சமிக்ஞை கோஸ்ட்வாட்ச் அமைப்புக்கு அனுப்பப்பட்டுள்ளது.',
            ACKNOWLEDGED: 'அதிகாரி உங்கள் சமிக்ஞையை ஏற்றுக்கொண்டுள்ளார்.',
            IN_PROGRESS: 'மீட்புக் குழுவினர் தயாராகி வருகின்றனர். அமைதியாக இருக்கவும்.',
            RESCUE_ASSIGNED: 'மீட்புக் குழு உங்கள் பகுதிக்கு அனுப்பப்பட்டுள்ளது.',
            RESOLVED: 'இந்த நிகழ்வு தீர்க்கப்பட்டதாக குறிக்கப்பட்டுள்ளது. பாதுகாப்பாக இருங்கள்.'
        },
        shelters: {
            title: 'பாதுகாப்பான புகலிட வழிகாட்டல்',
            subtitle: 'திறன், ஆபத்து, சாலை வசதி மற்றும் தூரத்தை கணக்கிட்டு பாதுகாப்பான புகலிடங்களை கண்டறிதல்',
            find_card_title: 'பாதுகாப்பான புகலிடத்தைக் கண்டறியவும்',
            find_card_desc: 'கோஸ்ட்வாட்ச் தூரத்தை மட்டுமல்லாமல், பேரிடர் அபாயங்கள் மற்றும் சாலை பாதுகாப்பையும் ஆராய்கிறது.',
            latitude_label: 'அட்சரேகை (Latitude)',
            longitude_label: 'தீர்க்கரேகை (Longitude)',
            radius_label: 'தேடல் ஆரம் (கி.மீ)',
            use_gps_btn: 'தற்போதைய GPS பயன்படுத்தவும்',
            rank_recommend_btn: 'புகலிடங்களை வரிசைப்படுத்துக',
            best_recommended_title: 'சிறந்த பரிந்துரைக்கப்பட்ட புகலிடம்',
            alternative_shelters_title: 'மாற்று புகலிடங்கள்',
            suitability_score_label: 'பொருத்தமான மதிப்பெண்',
            occupancy_label: 'இருக்கை நிலை: {used}/{total}',
            spots_available: '{count} இடங்கள் உள்ளன',
            get_directions_btn: 'வழிசெலுத்தவும்',
            view_on_map_btn: 'வரைபடத்தில் பார்க்கவும்',
            status_open: 'திறந்துள்ளது',
            status_full: 'நிரம்பியது',
            status_closed: 'மூடப்பட்டது',
            status_evacuating: 'வெளியேற்றம் நடக்கிறது'
        },
        safety: {
            title: 'பேரிடர் பாதுகாப்பு வழிகாட்டுதல்கள்',
            subtitle: 'புயல், சூறாவளி, வெள்ளம் மற்றும் கடல் அபாயங்களுக்கான அதிகாரப்பூர்வ வழிகாட்டுதல்கள்',
            dos_title: 'செய்ய வேண்டியவை (DO\'S)',
            do_1: 'அதிகாரப்பூர்வ எச்சரிக்கைகள் மற்றும் வானிலை அறிக்கைகளை கவனியுங்கள்.',
            do_2: 'அவசரகால பையை தயாராக வைத்திருக்கவும் (தண்ணீர், உலர் உணவு, டார்ச், முதலுதவி).',
            do_3: 'சுனாமி/புயல் எச்சரிக்கையின் போது உடனடியாக மேடான பகுதிகளுக்கு செல்லவும்.',
            do_4: 'NDRF மற்றும் உள்ளூர் நிர்வாகத்தின் வெளியேற்ற உத்தரவுகளுக்கு கீழ்ப்படியுங்கள்.',
            do_5: 'முக்கிய ஆவணங்களை நீர்ப்புகா பைகளில் பாதுகாக்கவும்.',
            do_6: 'குழந்தைகள், முதியவர்கள் மற்றும் மாற்றுத்திறனாளிகளுக்கு முன்னுரிமை அளியுங்கள்.',
            do_7: 'புயல் எச்சரிக்கையின் போது கடற்கரை பகுதிகளுக்கு செல்ல வேண்டாம்.',
            donts_title: 'செய்யக்கூடாதவை (DON\'TS)',
            dont_1: 'அதிகாரப்பூர்வ எச்சரிக்கைகளை புறக்கணிக்காதீர்கள்.',
            dont_2: 'அலைகளைப் பார்க்க கடற்கரைக்குச் செல்லாதீர்கள்.',
            dont_3: 'வெள்ள நீரில் மின்சாதனங்களை இயக்காதீர்கள்.',
            dont_4: 'வதந்திகளை சமூக ஊடகங்களில் பரப்பாதீர்கள்.',
            dont_5: 'வெள்ளம் சூழ்ந்த சாலைகளில் வாகனம் ஓட்டாதீர்கள்.',
            dont_6: 'செல்லப்பிராணிகளை கட்டி வைக்காதீர்கள்.',
            dont_7: 'பாதுகாப்பு உறுதி செய்யப்படாமல் சேதமடைந்த வீடுகளுக்கு திரும்பாதீர்கள்.',
            phased_protocols_title: 'படிநிலைப் பாதுகாப்பு நெறிமுறைகள்',
            before_title: 'பேரிடருக்கு முன்',
            before_1: 'பாதுகாப்பான வெளியேற்ற வழிகளை திட்டமிடுங்கள்',
            before_2: 'குடும்ப தகவல்தொடர்பு திட்டத்தை உருவாக்குங்கள்',
            before_3: '3 நாட்களுக்கு தேவையான உணவு, குடிநீரை சேமியுங்கள்',
            before_4: 'வீட்டின் கூரைகள் மற்றும் ஜன்னல்களை பலப்படுத்துங்கள்',
            during_title: 'பேரிடரின் போது',
            during_1: 'கண்ணாடி ஜன்னல்களிலிருந்து விலகி பாதுகாப்பான இடத்தில் இருங்கள்',
            during_2: 'வானொலி மற்றும் கோஸ்ட்வாட்ச் தகவல்களை கவனியுங்கள்',
            during_3: 'மின் இணைப்பு மற்றும் எரிவாயு சிலிண்டரை அணைக்கவும்',
            during_4: 'மொபைல் போன்களை பவர் சேவிங் முறையில் வைக்கவும்',
            after_title: 'பேரிடருக்கு பின்',
            after_1: 'காயங்களுக்கு முதலுதவி செய்யுங்கள்',
            after_2: 'சேதமடைந்த மின் கம்பிகளிலிருந்து விலகி இருங்கள்',
            after_3: 'சேதங்களை புகைப்படம் எடுத்து வையுங்கள்',
            after_4: 'புதிய ஆபத்துகளை உடனடியாக கோஸ்ட்வாட்ச்சில் புகாரளிக்கவும்'
        },
        emergency_modal: {
            badge: 'அவசர எச்சரிக்கை',
            radius_label: 'பாதிக்கப்பட்ட ஆரம்',
            severity_label: 'தீவிர நிலை',
            issued_time_label: 'வெளியிடப்பட்ட நேரம்',
            source_authority_label: 'அதிகாரப்பூர்வ அமைப்பு',
            view_on_map_btn: 'வரைபடத்தில் பார்க்கவும்',
            acknowledge_btn: 'ஏற்றுக்கொண்டு மூடு'
        }
    },

    // =========================================================================
    // TELUGU (te) — తెలుగు
    // =========================================================================
    te: {
        app: {
            name: 'కోస్ట్‌వాచ్',
            title: 'కోస్ట్‌వాచ్ — విపత్తు నిఘా & అత్యవసర ప్రతిస్పందన వేదిక',
            headline: 'కోస్ట్‌వాచ్ అత్యవసర కార్యకలాపాలు',
            tagline: 'రియల్-టైమ్ విపత్తు నిఘా, తీరప్రాంత పర్యవేక్షణ & రెస్క్యూ నెట్‌వర్క్.',
            quick_menu_title: 'త్వరిత కార్యకలాపాల మెను'
        },
        auth: {
            portal_title: 'సురక్షిత ప్రవేశ పోర్టల్',
            portal_subtitle: 'అధికారిక సిబ్బంది & కమాండ్ నెట్‌వర్క్',
            access_code_placeholder: 'యాక్సెస్ కోడ్‌ను నమోదు చేయండి',
            toggle_password: 'పాస్‌వర్డ్ చూపించు / దాచు',
            invalid_code: 'చెల్లని యాక్సెస్ కోడ్. దయచేసి మళ్లీ ప్రయత్నించండి.',
            access_console_btn: 'కమాండ్ కన్సోల్‌ను యాక్సెస్ చేయండి',
            welcome_user: 'స్వాగతం, పౌరుడు',
            welcome_admin: 'స్వాగతం, అడ్మినిస్ట్రేటర్',
            trust_score: 'విశ్వసనీయత స్కోరు',
            status_online: 'ఆన్‌లైన్',
            status_live: 'లైవ్',
            logout: 'లాగౌట్'
        },
        menu: {
            latest_alerts: 'తాజా హెచ్చరికలు',
            live_gis_map: 'లైవ్ GIS మ్యాప్',
            sos_distress: 'SOS / అత్యవసర ఆపద',
            helpline_dir: 'హెల్ప్‌లైన్ డైరెక్టరీ',
            find_shelters: 'సురక్షిత ఆశ్రయాలు',
            weather_conditions: 'వాతావరణం & సముద్ర పరిస్థితి',
            community_intel: 'కమ్యూనిటీ నిఘా',
            future_risk: 'భవిష్యత్ ప్రమాద అంచనా',
            safety_protocols: 'విపత్తు భద్రతా నియమాలు'
        },
        nav: {
            map: 'లైవ్ మ్యాప్',
            report: 'విపత్తును నివేదించండి',
            sos: 'అత్యవసర SOS',
            social: 'సోషల్ ఫీడ్',
            shelters: 'ఆశ్రయం కనుగొనండి',
            risk: 'ప్రమాద అంచనా',
            safety: 'భద్రతా చిట్కాలు',
            dashboard: 'డ్యాష్‌బోర్డ్'
        },
        map: {
            title: 'లైవ్ విపత్తు GIS మ్యాప్',
            subtitle: 'పర్యవేక్షించబడే ప్రాంతాలలో నిజ-సమయ విపత్తు కార్యకలాపాలు',
            active_hazards_count: 'క్రియాశీల విపత్తులు: {count}',
            filter_all_severities: 'అన్ని తీవ్రతలు',
            filter_high_risk: 'అధిక ప్రమాదం (🔴)',
            filter_medium_risk: 'మధ్యస్థ ప్రమాదం (🟠)',
            filter_low_risk: 'తక్కువ ప్రమాదం (🟢)',
            filter_all_hazards: 'అన్ని రకాల విపత్తులు',
            filter_floods: 'వరదలు',
            filter_cyclones: 'తుఫానులు',
            filter_tsunami: 'సునామీ / తీరప్రాంత ఆటుపోట్లు',
            filter_fires: 'అగ్ని ప్రమాదాలు',
            verified_recent_incidents: 'ధృవీకరించబడిన తాజా సంఘటనలు',
            active_alert_badge: 'క్రియాశీల హెచ్చరిక',
            verified_badge: 'ధృవీకరించబడింది ({score}%)',
            reporter_label: 'నివేదించినవారు: {name}',
            risk_label: '{severity} ప్రమాదం',
            reports_count: '{count} నివేదికలు'
        },
        report: {
            title: 'విపత్తు సంఘటనను నివేదించండి',
            subtitle: 'AI ధృవీకరణ మరియు తక్షణ సహాయం కోసం ఫోటో/వీడియో సాక్ష్యాలతో నివేదికను సమర్పించండి',
            hazard_type_label: '01 — విపత్తు వర్గీకరణ',
            hazard_type_select: 'విపత్తు రకాన్ని ఎంచుకోండి',
            hazard_cyclone: 'తుఫాను / తీవ్ర తుఫాను',
            hazard_fire: 'అగ్నిప్రమాదం / పారిశ్రామిక ప్రమాదం',
            hazard_flood: 'తీరప్రాంత / పట్టణ వరదలు',
            hazard_earthquake: 'భూకంపం',
            hazard_landslide: 'కొండచరియలు విరిగిపడటం',
            hazard_other: 'ఇతర అత్యవసర సంఘటన',
            location_label: '02 — సంఘటన జరిగిన స్థలం',
            location_placeholder: 'స్థలం పేరు లేదా ల్యాండ్‌మార్క్ నమోదు చేయండి',
            gps_btn: 'GPS',
            severity_label: '03 — తీవ్రత అంచనా',
            severity_low_title: 'తక్కువ తీవ్రత',
            severity_low_desc: 'చిన్న అంతరాయం / హెచ్చరిక',
            severity_medium_title: 'మధ్యస్థ తీవ్రత',
            severity_medium_desc: 'ప్రమాదకరం / ప్రతిస్పందన అవసరం',
            severity_high_title: 'అధిక / క్లిష్టమైన తీవ్రత',
            severity_high_desc: 'ప్రాణాంతకం / అత్యవసరం',
            description_label: '04 — పరిస్థితి వివరణ',
            description_placeholder: 'విపత్తు పరిస్థితి, చిక్కుకున్న వ్యక్తులు లేదా రహదారి అడ్డంకుల వివరాలు రాయండి...',
            evidence_label: '05 — సాక్ష్యాల అప్‌లోడ్ (AI ధృవీకరణ)',
            evidence_drop_title: 'ఫోటో/వీడియోను ఎంచుకోండి లేదా డ్రాప్ చేయండి',
            evidence_drop_subtitle: 'మద్దతు ఉన్న ఫార్మాట్‌లు: JPG, PNG, MP4, MOV (గరిష్టంగా 10MB)',
            submit_btn: 'విపత్తు నివేదికను సమర్పించండి',
            submitting_btn: 'సమర్పిస్తోంది...',
            fill_required_fields: 'దయచేసి అవసరమైన అన్ని ఫీల్డ్‌లను పూరించండి.',
            report_submitted_success: 'విపత్తు నివేదిక విజయవంతంగా సమర్పించబడింది!'
        },
        sos: {
            title: 'అత్యవసర SOS కేంద్రం',
            subtitle: 'రియల్-టైమ్ ఆపద ప్రసారం, GPS లొకేషన్ మరియు రెస్క్యూ కమాండ్‌తో ప్రత్యక్ష అనుసంధానం',
            hero_desc: 'SOS ప్రారంభించినప్పుడు మీ ఖచ్చితమైన స్థానంతో కోస్ట్‌వాచ్ కమాండ్ కేంద్రానికి అత్యవసర సిగ్నల్ పంపబడుతుంది. ప్రాణాపాయం ఉంటే వెంటనే డయల్ చేయండి:',
            tap_for_help: 'సహాయం కోసం నొక్కండి',
            sos_live: 'SOS లైవ్',
            status_below: 'పరిస్థితి క్రింద చూడండి',
            registering: 'నమోదు చేయబడుతోంది…',
            please_wait: 'దయచేసి వేచి ఉండండి',
            retry_sos: 'మళ్లీ ప్రయత్నించండి',
            tap_to_retry: 'మళ్లీ పంపడానికి నొక్కండి',
            sos_resolved: 'SOS పరిష్కరించబడింది',
            case_closed: 'కేసు ముగిసింది',
            tracker_title: 'లైవ్ ఆపద ట్రాకర్',
            ref_id_label: 'SOS సూచన సంఖ్య',
            activated_at: 'ప్రారంభ సమయం: {time}',
            location_captured_title: 'స్థానం గుర్తించబడింది',
            near_location: '{name} సమీపంలో (≈{dist} కి.మీ)',
            coords_captured: 'కోఆర్డినేట్స్ రికార్డ్ చేయబడ్డాయి',
            open_google_maps: 'గూగుల్ మ్యాప్స్‌లో చూడండి',
            location_unavailable_title: 'స్థానం అందుబాటులో లేదు',
            location_unavailable_desc: 'GPS స్థానం పొందడం సాధ్యపడలేదు. అధికారులు మీతో సంప్రదిస్తారు. వీలైతే 112 కు కాల్ చేయండి.',
            authority_notes_title: 'అధికారుల సూచనలు',
            warn_no_location: 'స్థానం భాగస్వామ్యం కాలేదు. అధికారులు సంప్రదించినప్పుడు మీ సరైన చిరునామా తెలపండి.',
            warn_pending_ack: 'అధికారుల ఆమోదం కోసం వేచి ఉంది.',
            reset_btn: 'SOS ట్రాకింగ్‌ను రీసెట్ చేయండి',
            reset_confirm: 'రీసెట్ చేయాలనుకుంటున్నారా?',
            reset_done: 'ఈ పరికరంలో SOS ట్రాకింగ్ రీసెట్ చేయబడింది.',
            sos_active_already: 'SOS ఇప్పటికే క్రియాశీలంగా ఉంది! సహాయం వస్తోంది.',
            failed_register: 'SOS నమోదు విఫలమైంది',
            floating_tooltip: 'అత్యవసర SOS — తక్షణ సహాయం కోసం నొక్కండి',
            helpline_title: 'జాతీయ అత్యవసర హెల్ప్‌లైన్ నంబర్లు',
            helpline_subtitle: '24/7 విపత్తు సహాయ మరియు రెస్క్యూ ఏజెన్సీల నంబర్లు.',
            cat_first_responders: 'మొదటి ప్రతిస్పందన బృందాలు',
            hl_112_desc: 'అన్ని అత్యవసరాలు (24/7)',
            hl_100_desc: 'పోలీస్',
            hl_101_desc: 'ఫైర్ రెస్క్యూ',
            hl_108_desc: 'అంబులెన్స్',
            cat_disaster_auth: 'విపత్తు అధికారులు',
            hl_ndma_desc: 'NDMA కంట్రోల్',
            hl_ndrf_desc: 'NDRF హెడ్‌క్వార్టర్స్',
            hl_state_desc: 'రాష్ట్ర విపత్తు నియంత్రణ',
            hl_district_desc: 'జిల్లా హెల్ప్‌లైన్',
            cat_coast_guard: 'కోస్ట్ గార్డ్ & సముద్ర భద్రత',
            hl_cg_emergency: 'కోస్ట్ గార్డ్ అత్యవసరం',
            hl_maritime_rescue: 'సముద్ర రెస్క్యూ',
            hl_fishermen: 'మత్స్యకారుల హెల్ప్‌లైన్',
            hl_port_emergency: 'పోర్ట్ ఎమర్జెన్సీ',
            cat_crisis_support: 'ప్రత్యేక సహాయం',
            hl_psy_support: 'మానసిక మద్దతు',
            hl_women: 'మహిళా హెల్ప్‌లైన్',
            hl_child: 'పిల్లల హెల్ప్‌లైన్',
            hl_traffic: 'ట్రాఫిక్ ఎమర్జెన్సీ'
        },
        sos_status: {
            PENDING: 'SOS సమర్పించబడింది',
            ACKNOWLEDGED: 'అధికారులు గుర్తించారు',
            IN_PROGRESS: 'సహాయక చర్యలు కొనసాగుతున్నాయి',
            RESCUE_ASSIGNED: 'రెస్క్యూ బృందం కేటాయించబడింది',
            RESOLVED: 'పరిష్కరించబడింది',
            step_label: 'దశ {step} · {status}',
            in_progress_text: 'పురోగతిలో ఉంది…'
        },
        shelters: {
            title: 'సురక్షిత ఆశ్రయాల మార్గదర్శకం',
            subtitle: 'సామర్థ్యం, ప్రమాదం, రహదారి సౌకర్యం మరియు దూరాన్ని విశ్లేషించి సురక్షిత ఆశ్రయాలను సిఫార్సు చేయడం',
            find_card_title: 'సమీపంలోని సురక్షిత ఆశ్రయాన్ని కనుగొనండి',
            find_card_desc: 'కోస్ట్‌వాచ్ దూరాన్ని మాత్రమే కాకుండా విపత్తు ప్రమాదాలు మరియు రహదారి భద్రతను కూడా విశ్లేషిస్తుంది.',
            latitude_label: 'మీ అక్షాంశం (Latitude)',
            longitude_label: 'మీ రేఖాంశం (Longitude)',
            radius_label: 'శోధన పరిధి (కి.మీ)',
            use_gps_btn: 'ప్రస్తుత GPS తీసుకోండి',
            rank_recommend_btn: 'ఆశ్రయాలను ర్యాంక్ చేయండి',
            best_recommended_title: 'ఉత్తమ సిఫార్సు చేయబడిన ఆశ్రయం',
            alternative_shelters_title: 'ప్రత్యామ్నాయ ఆశ్రయాలు',
            suitability_score_label: 'అనుకూలత స్కోరు',
            occupancy_label: 'ఆక్యుపెన్సీ: {used}/{total}',
            spots_available: '{count} స్థలాలు అందుబాటులో ఉన్నాయి',
            get_directions_btn: 'దిశలను పొందండి',
            view_on_map_btn: 'మ్యాప్‌లో చూడండి'
        },
        safety: {
            title: 'విపత్తు భద్రతా మార్గదర్శకాలు',
            subtitle: 'తుఫానులు, వరదలు మరియు తీరప్రాంత ఆపదల కోసం ప్రామాణిక మార్గదర్శకాలు',
            dos_title: 'చేయవలసినవి (DO\'S)',
            do_1: 'అధికారిక అత్యవసర హెచ్చరికలు మరియు వాతావరణ బులెటిన్‌లను గమనించండి.',
            do_2: 'ఎమర్జెన్సీ బ్యాగ్‌ను సిద్ధంగా ఉంచుకోండి (నీరు, ఆహారం, టార్చ్, ప్రథమ చికిత్స).',
            do_3: 'సునామీ/తుఫాను హెచ్చరిక వచ్చిన వెంటనే ఎత్తైన ప్రాంతాలకు లేదా సురక్షిత భవనాలకు వెళ్లండి.',
            do_4: 'NDRF మరియు అధికారుల తరలింపు ఆదేశాలను వెంటనే పాటించండి.',
            do_5: 'ముఖ్యమైన పత్రాలను వాటర్‌ప్రూఫ్ బ్యాగ్‌లలో భద్రపరచండి.',
            do_6: 'పిల్లలు, వృద్ధులు మరియు దివ్యాంగులకు ప్రాధాన్యత ఇవ్వండి.',
            do_7: 'తుఫాను సమయంలో సముద్ర తీరాలకు వెళ్లకండి.',
            donts_title: 'చేయకూడనివి (DON\'TS)',
            dont_1: 'అధికారిక హెచ్చరికలను విస్మరించవద్దు.',
            dont_2: 'తుఫాను అలలను చూడటానికి బీచ్‌లకు వెళ్లవద్దు.',
            dont_3: 'వరద నీటిలో విద్యుత్ పరికరాలను ఆన్ చేయవద్దు.',
            dont_4: 'సోషల్ మీడియాలో పుకార్లను వ్యాప్తి చేయవద్దు.',
            dont_5: 'మునిగిపోయిన రోడ్లపై ప్రయాణించవద్దు.',
            dont_6: 'పెంపుడు జంతువులను కట్టి ఉంచవద్దు.',
            dont_7: 'భద్రత నిర్ధారించే వరకు దెబ్బతిన్న ఇళ్లకు తిరిగి వెళ్లవద్దు.'
        },
        emergency_modal: {
            badge: 'అత్యవసర హెచ్చరిక',
            radius_label: 'ప్రభావిత పరిధి',
            severity_label: 'తీవ్రత స్థాయి',
            issued_time_label: 'జారీ చేసిన సమయం',
            source_authority_label: 'మూల అధికారం',
            view_on_map_btn: 'మ్యాప్‌లో ప్రాంతాన్ని చూడండి',
            acknowledge_btn: 'అంగీకరించి మూసివేయండి'
        }
    },

    // =========================================================================
    // BENGALI (bn) — বাংলা
    // =========================================================================
    bn: {
        app: {
            name: 'কোস্টওয়াচ',
            title: 'কোস্টওয়াচ — দুর্যোগ গোয়েন্দা ও জরুরি প্রতিক্রিয়া প্ল্যাটফর্ম',
            headline: 'কোস্টওয়াচ জরুরি অপারেশন সেন্টার',
            tagline: 'রিয়েল-টাইম দুর্যোগ গোয়েন্দা তথ্য, উপকূলীয় পর্যবেক্ষণ ও উদ্ধার নেটওয়ার্ক।',
            quick_menu_title: 'দ্রুত অপারেশন মেনু'
        },
        auth: {
            portal_title: 'নিরাপদ অ্যাক্সেস পোর্টাল',
            portal_subtitle: 'অনুমোদিত কর্মী ও জরুরি কমান্ড নেটওয়ার্ক',
            access_code_placeholder: 'অ্যাক্সেস কোড লিখুন',
            toggle_password: 'পাসওয়ার্ড দেখান / লুকান',
            invalid_code: 'অবৈধ অ্যাক্সেস কোড। অনুগ্রহ করে পুনরায় চেষ্টা করুন।',
            access_console_btn: 'কমান্ড কনসোলে প্রবেশ করুন',
            welcome_user: 'স্বাগতম, নাগরিক',
            welcome_admin: 'স্বাগতম, প্রশাসক',
            trust_score: 'বিশ্বাসযোগ্যতা স্কোর',
            status_online: 'অনলাইন',
            status_live: 'লাইভ',
            logout: 'লগআউট'
        },
        menu: {
            latest_alerts: 'সর্বশেষ সতর্কতা',
            live_gis_map: 'লাইভ জিআইএস ম্যাপ',
            sos_distress: 'SOS / জরুরি সংকট',
            helpline_dir: 'হেল্পলাইন ডিরেক্টরি',
            find_shelters: 'নিরাপদ আশ্রয় খুঁজুন',
            weather_conditions: 'আবহাওয়া ও সমুদ্রের অবস্থা',
            community_intel: 'কমিউনিটি গোয়েন্দা তথ্য',
            future_risk: 'ভবিষ্যতের ঝুঁকি অনুমান',
            safety_protocols: 'দুর্যোগ নিরাপত্তা প্রোটোকল'
        },
        nav: {
            map: 'লাইভ ম্যাপ',
            report: 'দুর্যোগ রিপোর্ট করুন',
            sos: 'জরুরি SOS',
            social: 'সোশ্যাল ফিড',
            shelters: 'আশ্রয় খুঁজুন',
            risk: 'ঝুঁকি অনুমান',
            safety: 'নিরাপত্তা টিপস',
            dashboard: 'ড্যাশবোর্ড'
        },
        map: {
            title: 'লাইভ দুর্যোগ জিআইএস ম্যাপ',
            subtitle: 'পর্যবেক্ষণাধীন অঞ্চলে রিয়েল-টাইম দুর্যোগ কার্যকলাপ ও গোয়েন্দা তথ্য',
            active_hazards_count: 'সক্রিয় দুর্যোগ: {count}',
            filter_all_severities: 'সব তীব্রতা স্তর',
            filter_high_risk: 'উচ্চ ঝুঁকি (🔴)',
            filter_medium_risk: 'মাঝারি ঝুঁকি (🟠)',
            filter_low_risk: 'কম ঝুঁকি (🟢)',
            filter_all_hazards: 'সব ধরণের দুর্যোগ',
            filter_floods: 'বন্যা / প্লাবন',
            filter_cyclones: 'ঘূর্ণিঝড় / ঝড়',
            filter_tsunami: 'সুনামি / জলোচ্ছ্বাস',
            filter_fires: 'অগ্নিকাণ্ড',
            verified_recent_incidents: 'যাচাইকৃত সাম্প্রতিক ঘটনা',
            active_alert_badge: 'সক্রিয় সতর্কতা',
            verified_badge: 'যাচাইকৃত ({score}%)',
            reporter_label: 'প্রতিবেদক: {name}',
            risk_label: '{severity} ঝুঁকি',
            reports_count: '{count} প্রতিবেদন'
        },
        report: {
            title: 'দুর্যোগের ঘটনা রিপোর্ট করুন',
            subtitle: 'এআই যাচাই ও দ্রুত প্রতিক্রিয়ার জন্য ছবি/ভিডিও প্রমাণসহ গ্রাউন্ড রিপোর্ট জমা দিন',
            hazard_type_label: '০১ — দুর্যোগ শ্রেণিবিন্যাস',
            hazard_type_select: 'দুর্যোগের ধরণ নির্বাচন করুন',
            hazard_cyclone: 'ঘূর্ণিঝড় / তীব্র ঝড়',
            hazard_fire: 'আগুন / শিল্প দুর্ঘটনা',
            hazard_flood: 'উপকূলীয় / শহুরে বন্যা',
            hazard_earthquake: 'ভূমিকম্প',
            hazard_landslide: 'ভূমিধস / নদীভাঙন',
            hazard_other: 'অন্যান্য জরুরি ঘটনা',
            location_label: '০২ — ঘটনার স্থান',
            location_placeholder: 'স্থানের নাম বা ল্যান্ডমার্ক লিখুন',
            gps_btn: 'GPS',
            severity_label: '০৩ — তীব্রতা মূল্যায়ন',
            severity_low_title: 'নিম্ন তীব্রতা',
            severity_low_desc: 'সামান্য ব্যাঘাত / সতর্কতা',
            severity_medium_title: 'মাঝারি তীব্রতা',
            severity_medium_desc: 'বিপজ্জনক / প্রতিক্রিয়া প্রয়োজন',
            severity_high_title: 'উচ্চ / সংকটজনক তীব্রতা',
            severity_high_desc: 'প্রাণঘাতী / অত্যন্ত জরুরি',
            description_label: '০৪ — পরিস্থিতির বিবরণ',
            description_placeholder: 'দুর্যোগের অবস্থা, আটকে পড়া মানুষ বা রাস্তা অবরোধের বিবরণ লিখুন...',
            evidence_label: '০৫ — প্রমাণ আপলোড (এআই যাচাইকরণ)',
            evidence_drop_title: 'ছবি/ভিডিও নির্বাচন করুন বা ড্রপ করুন',
            evidence_drop_subtitle: 'সমর্থিত ফর্ম্যাট: JPG, PNG, MP4, MOV (সর্বোচ্চ 10MB)',
            submit_btn: 'দুর্যোগ রিপোর্ট জমা দিন',
            submitting_btn: 'জমা দেওয়া হচ্ছে...',
            fill_required_fields: 'অনুগ্রহ করে সমস্ত প্রয়োজনীয় তথ্য পূরণ করুন।'
        },
        sos: {
            title: 'জরুরি সংকট SOS হাব',
            subtitle: 'রিয়েল-টাইম সংকট সংকেত সম্প্রচার ও সরাসরি উদ্ধারকারী দলের সাথে সংযোগ',
            hero_desc: 'SOS সক্রিয় করলে আপনার সঠিক অবস্থানের সাথে কোস্টওয়াচ কমান্ড সেন্টারে জরুরি সংকেত পাঠানো হয়। জরুরি প্রাণনাশের ঝুঁকিতে কল করুন:',
            tap_for_help: 'সাহায্যের জন্য ট্যাপ করুন',
            sos_live: 'SOS লাইভ',
            status_below: 'অবস্থা নিচে দেখুন',
            registering: 'নিবন্ধন হচ্ছে…',
            please_wait: 'দয়া করে অপেক্ষা করুন',
            retry_sos: 'পুনরায় চেষ্টা করুন',
            tap_to_retry: 'পুনরায় পাঠাতে ট্যাপ করুন',
            sos_resolved: 'SOS সমাধান হয়েছে',
            case_closed: 'কেস বন্ধ',
            tracker_title: 'লাইভ সংকট ট্র্যাকার',
            ref_id_label: 'SOS রেফারেন্স নম্বর',
            activated_at: 'সক্রিয় হয়েছে: {time}',
            location_captured_title: 'অবস্থান শনাক্ত হয়েছে',
            near_location: '{name}-এর কাছে (≈{dist} কিমি)',
            coords_captured: 'কোঅর্ডিনেটস সংরক্ষিত',
            open_google_maps: 'গুগল ম্যাপে দেখুন',
            location_unavailable_title: 'অবস্থান পাওয়া যায়নি',
            location_unavailable_desc: 'GPS অবস্থান পাওয়া যায়নি। কর্মকর্তারা যোগাযোগ করবেন। সম্ভব হলে 112 ডায়াল করুন।',
            authority_notes_title: 'কর্তৃপক্ষের নির্দেশনা',
            warn_no_location: 'অবস্থান শেয়ার করা যায়নি। কল এলে আপনার সঠিক অবস্থান ও ল্যান্ডমার্ক জানান।',
            warn_pending_ack: 'কর্তৃপক্ষের অনুমোদনের জন্য অপেক্ষা করা হচ্ছে।',
            reset_btn: 'ডিভাইস SOS ট্র্যাকিং রিসেট করুন',
            reset_confirm: 'রিসেট করতে চান?',
            reset_done: 'এই ডিভাইসে SOS ট্র্যাকিং রিসেট করা হয়েছে।',
            sos_active_already: 'SOS ইতিমধ্যে সক্রিয় আছে! সাহায্য আসছে।',
            failed_register: 'SOS নিবন্ধন ব্যর্থ হয়েছে',
            floating_tooltip: 'জরুরি SOS — অবিলম্বে সাহায্যের জন্য ট্যাপ করুন',
            helpline_title: 'জাতীয় জরুরি হেল্পলাইন ডিরেক্টরি',
            helpline_subtitle: '২৪/৭ দুর্যোগ প্রতিক্রিয়া এবং সহায়তা পরিষেবা নম্বর।',
            cat_first_responders: 'ফার্স্ট রেসপন্ডারস',
            hl_112_desc: 'সর্বভারতীয় জরুরি নম্বর (24/7)',
            hl_100_desc: 'পুলিশ কন্ট্রোল',
            hl_101_desc: 'ফায়ার সার্ভিস',
            hl_108_desc: 'অ্যাম্বুলেন্স',
            cat_disaster_auth: 'দুর্যোগ কর্তৃপক্ষ',
            hl_ndma_desc: 'NDMA কন্ট্রোল রুম',
            hl_ndrf_desc: 'NDRF সদর দফতর',
            hl_state_desc: 'রাজ্য দুর্যোগ নিয়ন্ত্রণ',
            hl_district_desc: 'জেলা হেল্পলাইন',
            cat_coast_guard: 'কোস্ট গার্ড ও সামুদ্রিক নিরাপত্তা',
            hl_cg_emergency: 'কোস্ট গার্ড জরুরি',
            hl_maritime_rescue: 'সমুদ্র উদ্ধার',
            hl_fishermen: 'মৎস্যজীবী হেল্পলাইন',
            hl_port_emergency: 'বন্দর জরুরি',
            cat_crisis_support: 'বিশেষ সহায়তা',
            hl_psy_support: 'মনস্তাত্ত্বিক সহায়তা',
            hl_women: 'মহিলা হেল্পলাইন',
            hl_child: 'শিশু হেল্পলাইন',
            hl_traffic: 'ট্রাফিক জরুরি'
        },
        sos_status: {
            PENDING: 'SOS জমা হয়েছে',
            ACKNOWLEDGED: 'কর্তৃপক্ষ দ্বারা গৃহীত',
            IN_PROGRESS: 'উদ্ধার কাজ চলছে',
            RESCUE_ASSIGNED: 'উদ্ধারকারী দল নিযুক্ত',
            RESOLVED: 'সমাধান হয়েছে / নিরাপদ',
            step_label: 'ধাপ {step} · {status}',
            in_progress_text: 'প্রক্রিয়াধীন…'
        },
        shelters: {
            title: 'নিরাপদ আশ্রয় রাউটিং',
            subtitle: 'ধারণক্ষমতা, স্থানীয় ঝুঁকি, রাস্তার অবস্থা ও দূরত্ব বিশ্লেষণ করে নিরাপদ আশ্রয় নির্ধারণ',
            find_card_title: 'নিকটতম নিরাপদ আশ্রয় খুঁজুন',
            find_card_desc: 'কোস্টওয়াচ কেবল দূরত্ব নয়, রিয়েল-টাইম দুর্যোগ ঝুঁকি ও রাস্তার নিরাপত্তাও বিশ্লেষণ করে।',
            latitude_label: 'আপনার অক্ষাংশ (Latitude)',
            longitude_label: 'আপনার দ্রাঘিমাংশ (Longitude)',
            radius_label: 'অনুসন্ধানের ব্যাসার্ধ (কিমি)',
            use_gps_btn: 'বর্তমান GPS নিন',
            rank_recommend_btn: 'আশ্রয়স্থল মূল্যায়ন করুন',
            best_recommended_title: 'সেরা প্রস্তাবিত আশ্রয়স্থল',
            alternative_shelters_title: 'বিকল্প আশ্রয়স্থল',
            suitability_score_label: 'উপযুক্ততা স্কোর',
            occupancy_label: 'অধিগ্রহণ: {used}/{total}',
            spots_available: '{count}টি স্থান উপলব্ধ',
            get_directions_btn: 'দিকনির্দেশনা পান',
            view_on_map_btn: 'ম্যাপে দেখুন'
        },
        safety: {
            title: 'দুর্যোগ নিরাপত্তা নির্দেশিকা',
            subtitle: 'ঘূর্ণিঝড়, বন্যা এবং উপকূলীয় দুর্যোগ মোকাবেলায় জাতীয় নির্দেশিকা',
            dos_title: 'করণীয় (DO\'S)',
            do_1: 'সরকারি জরুরি বুলেটিন এবং কোস্টওয়াচ আপডেটে নজর রাখুন।',
            do_2: 'জরুরি ব্যাগ প্রস্তুত রাখুন (পানি, শুকনো খাবার, টর্চ, প্রাথমিক চিকিৎসা)।',
            do_3: 'সুনামি বা জলোচ্ছ্বাসের সতর্কতায় অবিলম্বে উঁচু স্থানে যান।',
            do_4: 'প্রশাসনের নির্দেশ মেনে দ্রুত নিরাপদ স্থানে সরিয়ে যান।',
            do_5: 'জরুরি নথিপত্র ওয়াটারপ্রুফ ব্যাগে রাখুন।',
            do_6: 'শিশু, বৃদ্ধ এবং বিশেষ চাহিদাসম্পন্ন ব্যক্তিদের অগ্রাধিকার দিন।',
            do_7: 'ঝড়ের সময় সমুদ্র সৈকত ও নদী তীরবর্তী এলাকা থেকে দূরে থাকুন।',
            donts_title: 'বর্জনীয় (DON\'TS)',
            dont_1: 'সরকারি সতর্কতা উপেক্ষা করবেন না।',
            dont_2: 'ঝড়ের ঢেউ দেখতে সমুদ্র তীরে যাবেন না।',
            dont_3: 'জলাবদ্ধ ঘরে বৈদ্যুতিক সুইচে হাত দেবেন না।',
            dont_4: 'সোশ্যাল মিডিয়ায় গুজব ছড়াবেন না।',
            dont_5: 'প্লাবিত রাস্তায় গাড়ি চালানোর চেষ্টা করবেন না।',
            dont_6: 'পোষা প্রাণীদের বেঁধে রাখবেন না।',
            dont_7: 'নিরাপদ ঘোষিত না হওয়া পর্যন্ত ক্ষতিগ্রস্ত বাড়িতে ফিরবেন না।'
        },
        emergency_modal: {
            badge: 'জরুরি সতর্কতা',
            radius_label: 'প্রভাবিত ব্যাসার্ধ',
            severity_label: 'তীব্রতার মাত্রা',
            issued_time_label: 'ইস্যুর সময়',
            source_authority_label: 'উৎস কর্তৃপক্ষ',
            view_on_map_btn: 'ম্যাপে অঞ্চলটি দেখুন',
            acknowledge_btn: 'স্বীকার করুন ও বন্ধ করুন'
        }
    },

    // =========================================================================
    // MARATHI (mr) — मराठी
    // =========================================================================
    mr: {
        app: {
            name: 'कोस्टवॉच',
            title: 'कोस्टवॉच — आपत्ती गुप्तवार्ता आणि आपत्कालीन प्रतिसाद मंच',
            headline: 'कोस्टवॉच आपत्कालीन ऑपरेशन्स केंद्र',
            tagline: 'रिअल-टाइम आपत्ती गुप्तवार्ता, किनारपट्टी देखरेख आणि बचाव नेटवर्क.',
            quick_menu_title: 'जलद ऑपरेशन्स मेनू'
        },
        auth: {
            portal_title: 'सुरक्षित प्रवेश पोर्टल',
            portal_subtitle: 'अधिकृत कर्मचारी आणि कमांड नेटवर्क',
            access_code_placeholder: 'प्रवेश कोड टाका',
            toggle_password: 'पासवर्ड दाखवा / लपवा',
            invalid_code: 'अवैध प्रवेश कोड. कृपया पुन्हा प्रयत्न करा.',
            access_console_btn: 'कमांड कन्सोलमध्ये प्रवेश करा',
            welcome_user: 'स्वागत आहे, नागरिक',
            welcome_admin: 'स्वागत आहे, प्रशासक',
            trust_score: 'विश्वासार्हता स्कोअर',
            status_online: 'ऑनलाइन',
            status_live: 'लाइव्ह',
            logout: 'लॉगआउट'
        },
        menu: {
            latest_alerts: 'ताजी चेतावणी',
            live_gis_map: 'लाइव्ह GIS नकाशा',
            sos_distress: 'SOS / आणीबाणी संकट',
            helpline_dir: 'हेल्पलाइन निर्देशिका',
            find_shelters: 'सुरक्षित निवारे शोधा',
            weather_conditions: 'हवामान आणि समुद्राची स्थिती',
            community_intel: 'समुदाय गुप्तवार्ता',
            future_risk: 'भविष्यकालीन जोखीम अंदाज',
            safety_protocols: 'आपत्ती सुरक्षा नियम'
        },
        nav: {
            map: 'लाइव्ह नकाशा',
            report: 'आपत्ती नोंदवा',
            sos: 'आपत्कालीन SOS',
            social: 'सोशल फीड',
            shelters: 'निवारा शोधा',
            risk: 'जोखीम अंदाज',
            safety: 'सुरक्षा सूचना',
            dashboard: 'डॅशबोर्ड'
        },
        map: {
            title: 'लाइव्ह आपत्ती GIS नकाशा',
            subtitle: 'निगरानी क्षेत्रातील रिअल-टाइम आपत्ती हालचाली आणि गुप्तवार्ता',
            active_hazards_count: 'सक्रिय आपत्ती: {count}',
            filter_all_severities: 'सर्व तीव्रता स्तर',
            filter_high_risk: 'उच्च जोखीम (🔴)',
            filter_medium_risk: 'मध्यम जोखीम (🟠)',
            filter_low_risk: 'कमी जोखीम (🟢)',
            filter_all_hazards: 'सर्व आपत्ती प्रकार',
            filter_floods: 'पूर / पाणी भरणे',
            filter_cyclones: 'चक्रीवादळ / वादळ',
            filter_tsunami: 'त्सुनामी / लाटा',
            filter_fires: 'आग / दुर्घटना',
            verified_recent_incidents: 'पडताळणी केलेल्या ताज्या घटना',
            active_alert_badge: 'सक्रिय इशारा',
            verified_badge: 'पडताळणीकृत ({score}%)',
            reporter_label: 'नोंदणीकर्ता: {name}',
            risk_label: '{severity} जोखीम',
            reports_count: '{count} अहवाल'
        },
        report: {
            title: 'आपत्ती घटनेची नोंद करा',
            subtitle: 'AI पडताळणी आणि त्वरित मदतीसाठी फोटो/व्हिडिओ पुराव्यासह ग्राउंड रिपोर्ट सादर करा',
            hazard_type_label: '०१ — आपत्ती वर्गीकरण',
            hazard_type_select: 'आपत्ती प्रकार निवडा',
            hazard_cyclone: 'चक्रीवादळ / तीव्र वादळ',
            hazard_fire: 'आग / औद्योगिक दुर्घटना',
            hazard_flood: 'किनारपट्टी / शहरी पूर',
            hazard_earthquake: 'भूकंप',
            hazard_landslide: 'दरड कोसळणे',
            hazard_other: 'इतर आपत्कालीन घटना',
            location_label: '०२ — घटनास्थळ',
            location_placeholder: 'ठिकाणाचे नाव किंवा लँडमार्क टाका',
            gps_btn: 'GPS',
            severity_label: '०३ — तीव्रता मूल्यांकन',
            severity_low_title: 'कमी तीव्रता',
            severity_low_desc: 'किरकोळ अडथळा / इशारा',
            severity_medium_title: 'मध्यम तीव्रता',
            severity_medium_desc: 'धोकादायक / प्रतिसादाची गरज',
            severity_high_title: 'उच्च / गंभीर तीव्रता',
            severity_high_desc: 'जीवघेणी / अत्यंत तातडीची',
            description_label: '०४ — परिस्थितीचे वर्णन',
            description_placeholder: 'आपत्तीची स्थिती, अडकलेले लोक किंवा रस्ता बंद असल्याची माहिती लिहा...',
            evidence_label: '०५ — पुरावा अपलोड करा (AI पडताळणी)',
            evidence_drop_title: 'फोटो/व्हिडिओ निवडा किंवा ड्रॅग करा',
            evidence_drop_subtitle: 'समर्थित फॉरमॅट्स: JPG, PNG, MP4, MOV (कमाल 10MB)',
            submit_btn: 'आपत्ती अहवाल सादर करा',
            submitting_btn: 'सादर होत आहे...',
            fill_required_fields: 'कृपया सर्व आवश्यक माहिती भरा.'
        },
        sos: {
            title: 'आपत्कालीन संकट SOS केंद्र',
            subtitle: 'रिअल-टाइम संकट संदेश प्रक्षेपण आणि थेट बचाव पथकाशी संपर्क',
            hero_desc: 'SOS सक्रिय केल्यावर तुमच्या अचूक स्थानासह कोस्टवॉच कमांड केंद्राला संकट संदेश पाठवला जातो. त्वरित मदतीसाठी डायल करा:',
            tap_for_help: 'मदतीसाठी दाबा',
            sos_live: 'SOS सुरू आहे',
            status_below: 'स्थिती खाली पहा',
            registering: 'नोंदणी होत आहे…',
            please_wait: 'कृपया प्रतीक्षा करा',
            retry_sos: 'पुन्हा प्रयत्न करा',
            tap_to_retry: 'पुन्हा पाठवण्यासाठी दाबा',
            sos_resolved: 'SOS सोडवला गेला',
            case_closed: 'केस बंद',
            tracker_title: 'लाइव्ह संकट ट्रॅकर',
            ref_id_label: 'SOS संदर्भ क्रमांक',
            activated_at: 'सक्रिय वेळ: {time}',
            location_captured_title: 'स्थान नोंदवले गेले',
            near_location: '{name} जवळ (≈{dist} किमी)',
            coords_captured: 'निर्देशांक प्राप्त झाले',
            open_google_maps: 'गुगल मॅप्सवर पहा',
            location_unavailable_title: 'स्थान उपलब्ध नाही',
            location_unavailable_desc: 'GPS स्थान मिळू शकले नाही. अधिकारी तुमच्याशी संपर्क साधतील. शक्य असल्यास 112 वर कॉल करा.',
            authority_notes_title: 'अधिकाऱ्यांच्या सूचना',
            warn_no_location: 'स्थान शेअर झाले नाही. अधिकारी संपर्क साधतील तेव्हा तुमचे अचूक स्थान सांगा.',
            warn_pending_ack: 'अधिकाऱ्यांच्या मंजुरीची प्रतीक्षा आहे.',
            reset_btn: 'SOS ट्रॅकिंग रीसेट करा',
            reset_confirm: 'रीसेट करू इच्छिता?',
            reset_done: 'या डिव्हाइसवर SOS ट्रॅकिंग रीसेट केले गेले आहे.',
            sos_active_already: 'SOS आधीच सक्रिय आहे! मदत येत आहे.',
            failed_register: 'SOS नोंदणी अयशस्वी',
            floating_tooltip: 'आपत्कालीन SOS — त्वरित मदतीसाठी दाबा',
            helpline_title: 'राष्ट्रीय आपत्कालीन हेल्पलाइन निर्देशिका',
            helpline_subtitle: '२४/७ आपत्ती प्रतिसाद आणि बचाव सेवा क्रमांक.',
            cat_first_responders: 'प्रथम प्रतिसाद पथके',
            hl_112_desc: 'सर्व आणीबाणीसाठी (24/7)',
            hl_100_desc: 'पोलीस नियंत्रण',
            hl_101_desc: 'अग्निशामक दल',
            hl_108_desc: 'रुग्णवाहिका',
            cat_disaster_auth: 'आपत्ती व्यवस्थापन प्राधिकरण',
            hl_ndma_desc: 'NDMA नियंत्रण कक्ष',
            hl_ndrf_desc: 'NDRF मुख्यालय',
            hl_state_desc: 'राज्य नियंत्रण कक्ष',
            hl_district_desc: 'जिल्हा हेल्पलाइन',
            cat_coast_guard: 'तटरक्षक दल आणि सागरी सुरक्षा',
            hl_cg_emergency: 'तटरक्षक आपत्कालीन',
            hl_maritime_rescue: 'सागरी बचाव',
            hl_fishermen: 'मच्छीमार हेल्पलाइन',
            hl_port_emergency: 'बंदर आणीबाणी'
        },
        sos_status: {
            PENDING: 'SOS पाठवला गेला',
            ACKNOWLEDGED: 'अधिकाऱ्यांनी दखल घेतली',
            IN_PROGRESS: 'बचाव कार्य प्रगतीपथावर',
            RESCUE_ASSIGNED: 'बचाव पथक रवाना',
            RESOLVED: 'सोडवले / सुरक्षित',
            step_label: 'टप्पा {step} · {status}',
            in_progress_text: 'प्रगतीपथावर…'
        },
        shelters: {
            title: 'सुरक्षित निवारा मार्गदर्शक',
            subtitle: 'क्षमता, जोखीम, रस्ता आणि अंतराचे विश्लेषण करून सुरक्षित निवारे सुचवणे',
            find_card_title: 'जवळचा सुरक्षित निवारा शोधा',
            find_card_desc: 'कोस्टवॉच केवळ अंतरच नव्हे तर रस्त्यांची सुरक्षितता आणि आपत्ती धोके देखील तपासते.',
            latitude_label: 'तुमचे अक्षांश (Latitude)',
            longitude_label: 'तुमचे रेखांश (Longitude)',
            radius_label: 'शोध त्रिज्या (किमी)',
            use_gps_btn: 'सध्याचे GPS वापरा',
            rank_recommend_btn: 'निवारे शोधा व रँक करा',
            best_recommended_title: 'सर्वोत्कृष्ट शिफारस केलेला निवारा',
            alternative_shelters_title: 'पर्यायी निवारे',
            suitability_score_label: 'उपयुक्तता स्कोअर',
            occupancy_label: 'क्षमता: {used}/{total}',
            spots_available: '{count} जागा उपलब्ध',
            get_directions_btn: 'दिशानिर्देश मिळवा',
            view_on_map_btn: 'नकाशावर पहा'
        },
        safety: {
            title: 'आपत्ती सुरक्षा मार्गदर्शक तत्त्वे',
            subtitle: 'चक्रीवादळ, पूर आणि सागरी संकटांसाठी अधिकृत मार्गदर्शक तत्त्वे',
            dos_title: 'काय करावे (DO\'S)',
            do_1: 'अधिकृत बुलेटिन आणि कोस्टवॉच चेतावणींवर लक्ष ठेवा.',
            do_2: 'आपत्कालीन बॅग तयार ठेवा (पाणी, सुका खाऊ, टॉर्च, प्रथमोपचार).',
            do_3: 'त्सुनामी/वादळाच्या इशाऱ्यादरम्यान त्वरित उंच ठिकाणी जा.',
            do_4: 'प्रशासनाच्या सूचनांचे तत्परतेने पालन करा.',
            do_5: 'महत्त्वाचे दस्तऐवज वॉटरप्रूफ बॅगमध्ये ठेवा.',
            do_6: 'लहान मुले, वृद्ध आणि दिव्यांगांना प्राधान्य द्या.',
            do_7: 'वादळादरम्यान समुद्रकिनारी जाऊ नका.',
            donts_title: 'काय करू नये (DON\'TS)',
            dont_1: 'अधिकृत इशाऱ्यांकडे दुर्लक्ष करू नका.',
            dont_2: 'लाटा पाहण्यासाठी समुद्रकिनारी जाऊ नका.',
            dont_3: 'पाण्यात विजेच्या उपकरणांना हात लावू नका.',
            dont_4: 'सोशल मीडियावर अफवा पसरवू नका.',
            dont_5: 'पाणी साचलेल्या रस्त्यांवरून वाहन चालवू नका.',
            dont_6: 'पाळीव प्राण्यांना बांधून ठेवू नका.',
            dont_7: 'सुरक्षित घोषित होईपर्यंत पडझड झालेल्या घरात परत जाऊ नका.'
        },
        emergency_modal: {
            badge: 'आपत्कालीन इशारा',
            radius_label: 'प्रभावित क्षेत्र',
            severity_label: 'तीव्रता स्तर',
            issued_time_label: 'जारी वेळ',
            source_authority_label: 'स्रोत प्राधिकरण',
            view_on_map_btn: 'नकाशावर पहा',
            acknowledge_btn: 'स्वीकारा आणि बंद करा'
        }
    },

    // =========================================================================
    // GUJARATI (gu) — ગુજરાતી
    // =========================================================================
    gu: {
        app: {
            name: 'કોસ્ટવોચ',
            title: 'કોસ્ટવોચ — આપત્તિ ગુપ્તચર અને કટોકટી પ્રતિસાદ મંચ',
            headline: 'કોસ્ટવોચ કટોકટી કામગીરી કેન્દ્ર',
            tagline: 'રીઅલ-ટાઇમ આપત્તિ ગુપ્તચર, દરિયાકાંઠાની દેખરેખ અને બચાવ નેટવર્ક.',
            quick_menu_title: 'ઝડપી કામગીરી મેનુ'
        },
        auth: {
            portal_title: 'સુરક્ષિત પ્રવેશ પોર્ટલ',
            portal_subtitle: 'અધિકૃત કર્મચારીઓ અને કટોકટી કમાન્ડ નેટવર્ક',
            access_code_placeholder: 'એક્સેસ કોડ દાખલ કરો',
            toggle_password: 'પાસવર્ડ બતાવો / છુપાવો',
            invalid_code: 'અમાન્ય એક્સેસ કોડ. કૃપા કરીને ફરી પ્રયાસ કરો.',
            access_console_btn: 'કમાન્ડ કન્સોલ દાખલ કરો',
            welcome_user: 'સ્વાગત છે, નાગરિક',
            welcome_admin: 'સ્વાગત છે, એડમિનિસ્ટ્રેટર',
            trust_score: 'વિશ્વાસ સ્કોર',
            status_online: 'ઓનલાઈન',
            status_live: 'લાઈવ',
            logout: 'લૉગઆઉટ'
        },
        menu: {
            latest_alerts: 'તાજેતરની ચેતવણીઓ',
            live_gis_map: 'લાઈવ GIS નકશો',
            sos_distress: 'SOS / કટોકટી સહાય',
            helpline_dir: 'હેલ્પલાઇન ડિરેક્ટરી',
            find_shelters: 'સુરક્ષિત આશ્રયસ્થાનો',
            weather_conditions: 'હવામાન અને દરિયાઈ સ્થિતિ',
            community_intel: 'સમુદાય ઇન્ટેલિજન્સ',
            future_risk: 'ભાવિ જોખમ અંદાજ',
            safety_protocols: 'આપત્તિ સુરક્ષા નિયમો'
        },
        nav: {
            map: 'લાઈવ નકશો',
            report: 'આપત્તિ નોંધાવો',
            sos: 'કટોકટી SOS',
            social: 'સોશિયલ ફીડ',
            shelters: 'આશ્રય શોધો',
            risk: 'જોખમ અંદાજ',
            safety: 'સુરક્ષા ટિપ્સ',
            dashboard: 'ડેશબોર્ડ'
        },
        map: {
            title: 'લાઈવ આપત્તિ GIS નકશો',
            subtitle: 'નિરીક્ષણ હેઠળના વિસ્તારોમાં વાસ્તવિક સમયની આપત્તિ પ્રવૃત્તિ',
            active_hazards_count: 'સક્રિય આપત્તિઓ: {count}',
            filter_all_severities: 'બધી તીવ્રતા',
            filter_high_risk: 'ઉચ્ચ જોખમ (🔴)',
            filter_medium_risk: 'મધ્યમ જોખમ (🟠)',
            filter_low_risk: 'ઓછું જોખમ (🟢)',
            filter_all_hazards: 'બધા આપત્તિ પ્રકાર',
            filter_floods: 'પૂર / પાણી ભરાવું',
            filter_cyclones: 'વાવાઝોડું / ચક્રવાત',
            filter_tsunami: 'સુનામી / મોજાં',
            filter_fires: 'આગ / દુર્ઘટના',
            verified_recent_incidents: 'ચકાસાયેલ તાજેતરની ઘટનાઓ',
            active_alert_badge: 'સક્રિય ચેતવણી',
            verified_badge: 'ચકાસાયેલ ({score}%)'
        },
        report: {
            title: 'આપત્તિ ઘટનાની જાણ કરો',
            subtitle: 'AI ચકાસણી અને ઝડપી મદદ માટે ફોટો/વિડિયો પુરાવા સાથે રિપોર્ટ સબમિટ કરો',
            hazard_type_label: '૦૧ — આપત્તિ વર્ગીકરણ',
            hazard_type_select: 'આપત્તિ પ્રકાર પસંદ કરો',
            hazard_cyclone: 'વાવાઝોડું / ચક્રવાત',
            hazard_fire: 'આગ / ઔદ્યોગિક જોખમ',
            hazard_flood: 'દરિયાકાંઠાનું / શહેરી પૂર',
            hazard_earthquake: 'ભૂકંપ',
            hazard_landslide: 'જમીન ધસી પડવી',
            hazard_other: 'અન્ય કટોકટી ઘટના',
            location_label: '૦૨ — ઘટના સ્થળ',
            location_placeholder: 'સ્થળનું નામ અથવા લેન્ડમાર્ક દાખલ કરો',
            gps_btn: 'GPS',
            severity_label: '૦૩ — તીવ્રતા મૂલ્યાંકન',
            severity_low_title: 'ઓછી તીવ્રતા',
            severity_low_desc: 'નાની સમસ્યા / ચેતવણી',
            severity_medium_title: 'મધ્યમ તીવ્રતા',
            severity_medium_desc: 'જોખમી / પ્રતિસાદ જરૂરી',
            severity_high_title: 'ઉચ્ચ / ગંભીર તીવ્રતા',
            severity_high_desc: 'જીવલેણ / અત્યંત તાકીદનું',
            description_label: '૦૪ — પરિસ્થિતિનું વર્ણન',
            description_placeholder: 'આપત્તિની સ્થિતિ, ફસાયેલા લોકો અથવા રસ્તા બ્લોક હોવાની વિગતો લખો...',
            evidence_label: '૦૫ — પુરાવા અપલોડ કરો (AI ચકાસણી)',
            evidence_drop_title: 'ફોટો/વિડિયો પસંદ કરો અથવા ડ્રોપ કરો',
            evidence_drop_subtitle: 'સપોર્ટેડ ફોર્મેટ્સ: JPG, PNG, MP4, MOV (મહત્તમ 10MB)',
            submit_btn: 'આપત્તિ રિપોર્ટ સબમિટ કરો',
            submitting_btn: 'સબમિટ થઈ રહ્યું છે...',
            fill_required_fields: 'કૃપા કરીને બધી જરૂરી માહિતી ભરો.'
        },
        sos: {
            title: 'કટોકટી સહાય SOS કેન્દ્ર',
            subtitle: 'રીઅલ-ટાઇમ કટોકટી સિગ્નલ પ્રસારણ અને સીધો બચાવ ટીમ સંપર્ક',
            hero_desc: 'SOS શરૂ કરવાથી તમારા ચોક્કસ સ્થાન સાથે કમાન્ડ સેન્ટરને કટોકટી સિગ્નલ મોકલવામાં આવે છે. જીવન રક્ષણ માટે ડાયલ કરો:',
            tap_for_help: 'મદદ માટે દબાવો',
            sos_live: 'SOS લાઈવ',
            status_below: 'સ્થિતિ નીચે જુઓ',
            registering: 'નોંધણી થઈ રહી છે…',
            please_wait: 'કૃપા કરીને રાહ જુઓ',
            retry_sos: 'ફરી પ્રયાસ કરો',
            tap_to_retry: 'ફરી મોકલવા દબાવો',
            sos_resolved: 'SOS ઉકેલાઈ ગયું',
            case_closed: 'કેસ બંધ',
            tracker_title: 'લાઈવ આપત્તિ ટ્રેકર',
            ref_id_label: 'SOS સંદર્ભ નંબર',
            activated_at: 'શરૂ સમય: {time}',
            location_captured_title: 'સ્થાન નોંધાયું',
            near_location: '{name} નજીક (≈{dist} કિમી)',
            coords_captured: 'કોઓર્ડિનેટ્સ મળ્યા',
            open_google_maps: 'ગૂગલ મેપ્સ પર જુઓ',
            location_unavailable_title: 'સ્થાન ઉપલબ્ધ નથી',
            location_unavailable_desc: 'GPS સ્થાન મેળવી શકાયું નથી. અધિકારીઓ સંપર્ક કરશે. શક્ય હોય તો 112 ડાયલ કરો.',
            authority_notes_title: 'અધિકારીઓની સૂચનાઓ',
            warn_no_location: 'સ્થાન શેર થયું નથી. અધિકારીઓ કોલ કરે ત્યારે તમારું સાચું સ્થાન જણાવો.',
            warn_pending_ack: 'અધિકારીઓની મંજૂરીની રાહ જોવાઈ રહી છે.',
            reset_btn: 'SOS ટ્રેકિંગ રીસેટ કરો',
            reset_confirm: 'શું તમે રીસેટ કરવા માંગો છો?',
            reset_done: 'આ ઉપકરણ પર SOS ટ્રેકિંગ રીસેટ કરવામાં આવ્યું છે.',
            sos_active_already: 'SOS પહેલેથી જ સક્રિય છે! મદદ આવી રહી છે.',
            failed_register: 'SOS નોંધણી નિષ્ફળ થઈ',
            floating_tooltip: 'કટોકટી SOS — તાત્કાલિક મદદ માટે દબાવો',
            helpline_title: 'રાષ્ટ્રીય કટોકટી હેલ્પલાઇન ડિરેક્ટરી',
            helpline_subtitle: '૨૪/૭ આપત્તિ પ્રતિસાદ અને બચાવ સેવા નંબર.',
            cat_first_responders: 'પ્રથમ પ્રતિસાદ ટીમો',
            hl_112_desc: 'બધી કટોકટી માટે (24/7)',
            hl_100_desc: 'પોલીસ',
            hl_101_desc: 'ફાયર બ્રિગેડ',
            hl_108_desc: 'એમ્બ્યુલન્સ',
            cat_disaster_auth: 'આપત્તિ વ્યવસ્થાપન સત્તામંડળ',
            hl_ndma_desc: 'NDMA કંટ્રોલ રૂમ',
            hl_ndrf_desc: 'NDRF હેડક્વાર્ટર',
            hl_state_desc: 'રાજ્ય કંટ્રોલ રૂમ',
            hl_district_desc: 'જિલ્લા હેલ્પલાઇન',
            cat_coast_guard: 'કોસ્ટ ગાર્ડ અને દરિયાઈ સુરક્ષા',
            hl_cg_emergency: 'કોસ્ટ ગાર્ડ કટોકટી',
            hl_maritime_rescue: 'દરિયાઈ બચાવ',
            hl_fishermen: 'માછીમાર હેલ્પલાઇન',
            hl_port_emergency: 'બંદર કટોકટી'
        },
        sos_status: {
            PENDING: 'SOS સબમિટ થયું',
            ACKNOWLEDGED: 'અધિકારીઓએ સ્વીકાર્યું',
            IN_PROGRESS: 'બચાવ કાર્ય ચાલુ છે',
            RESCUE_ASSIGNED: 'બચાવ ટીમ નિયુક્ત થઈ',
            RESOLVED: 'ઉકેલાયું / સુરક્ષિત',
            step_label: 'પગલું {step} · {status}',
            in_progress_text: 'પ્રક્રિયા હેઠળ…'
        },
        shelters: {
            title: 'સુરક્ષિત આશ્રય માર્ગદર્શન',
            subtitle: 'ક્ષમતા, જોખમ, રસ્તો અને અંતરનું વિશ્લેષણ કરીને સુરક્ષિત આશ્રયસ્થાનોની ભલામણ કરવી',
            find_card_title: 'સૌથી નજીકનું સુરક્ષિત આશ્રય શોધો',
            find_card_desc: 'કોસ્ટવોચ માત્ર અંતર જ નહીં પણ રસ્તાની સલામતી અને આપત્તિના જોખમોનું પણ મૂલ્યાંકન કરે છે.',
            latitude_label: 'તમારો અક્ષાંશ (Latitude)',
            longitude_label: 'તમારો રેખાંશ (Longitude)',
            radius_label: 'શોધ ત્રિજ્યા (કિમી)',
            use_gps_btn: 'હાલનું GPS વાપરો',
            rank_recommend_btn: 'આશ્રયસ્થાનો શોધો',
            best_recommended_title: 'શ્રેષ્ઠ ભલામણ કરેલ આશ્રય',
            alternative_shelters_title: 'વૈકલ્પિક આશ્રયસ્થાનો',
            suitability_score_label: 'અનુકૂળતા સ્કોર',
            occupancy_label: 'ક્ષમતા: {used}/{total}',
            spots_available: '{count} જગ્યાઓ ઉપલબ્ધ',
            get_directions_btn: 'દિશાઓ મેળવો',
            view_on_map_btn: 'નકશા પર જુઓ'
        },
        safety: {
            title: 'આપત્તિ સુરક્ષા માર્ગદર્શિકા',
            subtitle: 'વાવાઝોડું, પૂર અને દરિયાઈ જોખમો માટે સત્તાવાર માર્ગદર્શિકા',
            dos_title: 'શું કરવું (DO\'S)',
            do_1: 'સત્તાવાર બુલેટિન અને કોસ્ટવોચ ચેતવણીઓ પર નજર રાખો.',
            do_2: 'કટોકટીની કિટ તૈયાર રાખો (પાણી, સૂકો ખોરાક, ટોર્ચ, પ્રાથમિક સારવાર).',
            do_3: 'વાવાઝોડા/સુનામીની ચેતવણી સમયે તાત્કાલિક ઊંચા સ્થળોએ જાઓ.',
            do_4: 'તંત્રના સ્થળાંતર આદેશોનું ચુસ્તપણે પાલન કરો.',
            do_5: 'મહત્વપૂર્ણ દસ્તાવેજો વોટરપ્રૂફ બેગમાં સાચવો.',
            do_6: 'બાળકો, વૃદ્ધો અને દિવ્યાંગોને પ્રાથમિકતા આપો.',
            do_7: 'વાવાઝોડા દરમિયાન દરિયાકિનારે જવાનું ટાળો.',
            donts_title: 'શું ન કરવું (DON\'TS)',
            dont_1: 'સત્તાવાર ચેતવણીઓને અવગણશો નહીં.',
            dont_2: 'મોજાં જોવા દરિયાકિનારે જશો નહીં.',
            dont_3: 'પાણી ભરાયેલા ઘરમાં વીજળીના ઉપકરણો ચાલુ ન કરો.',
            dont_4: 'સોશિયલ મીડિયા પર અફવાઓ ફેલાવશો નહીં.',
            dont_5: 'પાણી ભરેલા રસ્તાઓ પર વાહન ચલાવશો નહીં.',
            dont_6: 'પાલતુ પ્રાણીઓને બાંધી રાખશો નહીં.',
            dont_7: 'સુરક્ષિત જાહેર ન થાય ત્યાં સુધી ક્ષતિગ્રસ્ત મકાનમાં પાછા ન જાવ.'
        },
        emergency_modal: {
            badge: 'કટોકટી ચેતવણી',
            radius_label: 'અસરગ્રસ્ત ત્રિજ્યા',
            severity_label: 'તીવ્રતા સ્તર',
            issued_time_label: 'ચેતવણી સમય',
            source_authority_label: 'સ્ત્રોત સત્તામંડળ',
            view_on_map_btn: 'નકશા પર વિસ્તાર જુઓ',
            acknowledge_btn: 'સ્વીકારો અને બંધ કરો'
        }
    },

    // =========================================================================
    // MALAYALAM (ml) — മലയാളം
    // =========================================================================
    ml: {
        app: {
            name: 'കോസ്റ്റ് വാച്ച്',
            title: 'കോസ്റ്റ് വാച്ച് — ദുരന്ത നിരീക്ഷണ & അടിയന്തര പ്രതികരണ പ്ലാറ്റ്‌ഫോം',
            headline: 'കോസ്റ്റ് വാച്ച് എമർജൻസി ഓപ്പറേഷൻസ്',
            tagline: 'തത്സമയ ദുരന്ത നിരീക്ഷണം, തീരദേശ സുരക്ഷ & അടിയന്തര രക്ഷാപ്രവർത്തന ശൃംഖല.',
            quick_menu_title: 'ദ്രുത പ്രവർത്തന മെനു'
        },
        auth: {
            portal_title: 'സുരക്ഷിത പ്രവേശന പോർട്ടൽ',
            portal_subtitle: 'അംഗീകൃത ഉദ്യോഗസ്ഥരും കമാൻഡ് നെറ്റ്‌വർക്കും',
            access_code_placeholder: 'ആക്സസ് കോഡ് നൽകുക',
            toggle_password: 'പാസ്‌വേഡ് കാണിക്കുക / മറയ്ക്കുക',
            invalid_code: 'അസാധുവായ ആക്സസ് കോഡ്. ദയവായി വീണ്ടും ശ്രമിക്കുക.',
            access_console_btn: 'കമാൻഡ് കൺസോൾ തുറക്കുക',
            welcome_user: 'സ്വാഗതം, പൗരൻ',
            welcome_admin: 'സ്വാഗതം, അഡ്മിനിസ്ട്രേറ്റർ',
            trust_score: 'വിശ്വാസ്യത സ്കോർ',
            status_online: 'ഓൺലൈൻ',
            status_live: 'തത്സമയം',
            logout: 'പുറത്തുകടക്കുക'
        },
        menu: {
            latest_alerts: 'ഏറ്റവും പുതിയ മുന്നറിയിപ്പുകൾ',
            live_gis_map: 'ലൈവ് GIS മാപ്പ്',
            sos_distress: 'SOS / അടിയന്തര സഹായം',
            helpline_dir: 'ഹെൽപ്പ്‌ലൈൻ ഡയറക്ടറി',
            find_shelters: 'സുരക്ഷിത അഭയകേന്ദ്രങ്ങൾ',
            weather_conditions: 'കാലാവസ്ഥയും കടൽ അവസ്ഥയും',
            community_intel: 'കമ്മ്യൂണിറ്റി ഇന്റലിജൻസ്',
            future_risk: 'ഭാവി ദുരന്ത സാധ്യത',
            safety_protocols: 'ദുരന്ത നിവാരണ മാർഗ്ഗനിർദ്ദേശങ്ങൾ'
        },
        nav: {
            map: 'ലൈവ് മാപ്പ്',
            report: 'അപകടം റിപ്പോർട്ട് ചെയ്യുക',
            sos: 'എമർജൻസി SOS',
            social: 'സോഷ്യൽ ഫീഡ്',
            shelters: 'അഭയകേന്ദ്രം കണ്ടെത്തുക',
            risk: 'സാധ്യത വിലയിരുത്തൽ',
            safety: 'സുരക്ഷാ നിർദ്ദേശങ്ങൾ',
            dashboard: 'ഡാഷ്‌ബോർഡ്'
        },
        map: {
            title: 'ലൈവ് ദുരന്ത GIS മാപ്പ്',
            subtitle: 'നിരീക്ഷണ മേഖലകളിലെ തത്സമയ ദുരന്ത വിവരങ്ങളും രക്ഷാപ്രവർത്തനങ്ങളും',
            active_hazards_count: 'സജീവമായ അപകടങ്ങൾ: {count}',
            filter_all_severities: 'എല്ലാ തീവ്രതകളും',
            filter_high_risk: 'ഉയർന്ന അപകടസാധ്യത (🔴)',
            filter_medium_risk: 'ഇടത്തരം അപകടസാധ്യത (🟠)',
            filter_low_risk: 'കുറഞ്ഞ അപകടസാധ്യത (🟢)',
            filter_all_hazards: 'എല്ലാ ദുരന്തങ്ങളും',
            filter_floods: 'വെള്ളപ്പൊക്കം',
            filter_cyclones: 'ചുഴലിക്കാറ്റ് / കൊടുങ്കാറ്റ്',
            filter_tsunami: 'സുനാമി / കടലാക്രമണം',
            filter_fires: 'തീപിടുത്തം',
            verified_recent_incidents: 'സ്ഥിരീകരിച്ച സമീപകാല സംഭവങ്ങൾ',
            active_alert_badge: 'സജീവ മുന്നറിയിപ്പ്',
            verified_badge: 'സ്ഥിരീകരിച്ചു ({score}%)'
        },
        report: {
            title: 'ദുരന്ത സംഭവം റിപ്പോർട്ട് ചെയ്യുക',
            subtitle: 'AI സ്ഥിരീകരണത്തിനും വേഗത്തിലുള്ള രക്ഷാപ്രവർത്തനത്തിനുമായി ഫോട്ടോ/വീഡിയോ തെളിവുകളോടെ സമർപ്പിക്കുക',
            hazard_type_label: '01 — അപകട വർഗ്ഗീകരണം',
            hazard_type_select: 'അപകട തരം തിരഞ്ഞെടുക്കുക',
            hazard_cyclone: 'ചുഴലിക്കാറ്റ് / അതിശക്തമായ കാറ്റ്',
            hazard_fire: 'തീപിടുത്തം / വ്യാവസായിക അപകടം',
            hazard_flood: 'തീരദേശ / നഗര വെള്ളപ്പൊക്കം',
            hazard_earthquake: 'ഭൂകമ്പം',
            hazard_landslide: 'ഉരുൾപൊട്ടൽ / മണ്ണിടിച്ചിൽ',
            hazard_other: 'മറ്റ് അടിയന്തര സംഭവം',
            location_label: '02 — സംഭവം നടന്ന സ്ഥലം',
            location_placeholder: 'സ്ഥലത്തിന്റെ പേര് അല്ലെങ്കിൽ ലാൻഡ്മാർക്ക് നൽകുക',
            gps_btn: 'GPS',
            severity_label: '03 — തീവ്രത നിർണ്ണയം',
            severity_low_title: 'കുറഞ്ഞ തീവ്രത',
            severity_low_desc: 'ചെറിയ തടസ്സം / ജാഗ്രത',
            severity_medium_title: 'ഇടത്തരം തീവ്രത',
            severity_medium_desc: 'അപകടകരം / സഹായം ആവശ്യമാണ്',
            severity_high_title: 'ഉയർന്ന / ഗുരുതര തീവ്രത',
            severity_high_desc: 'ജീവൻ അപകടത്തിൽ / അടിയന്തര രക്ഷാപ്രവർത്തനം',
            description_label: '04 — സാഹചര്യ വിവരണം',
            description_placeholder: 'ദുരന്ത സാഹചര്യം, ഒറ്റപ്പെട്ടുപോയ ആളുകൾ, റോഡ് തടസ്സങ്ങൾ എന്നിവ വിവരിക്കുക...',
            evidence_label: '05 — തെളിവ് അപ്‌ലോഡ് ചെയ്യുക (AI പരിശോധന)',
            evidence_drop_title: 'ഫോട്ടോ/വീഡിയോ തിരഞ്ഞെടുക്കുക അല്ലെങ്കിൽ ഡ്രോപ്പ് ചെയ്യുക',
            evidence_drop_subtitle: 'പിന്തുണയ്ക്കുന്ന ഫോർമാറ്റുകൾ: JPG, PNG, MP4, MOV (പരമാവധി 10MB)',
            submit_btn: 'റിപ്പോർട്ട് സമർപ്പിക്കുക',
            submitting_btn: 'സമർപ്പിക്കുന്നു...',
            fill_required_fields: 'ദയവായി ആവശ്യമായ എല്ലാ വിവരങ്ങളും നൽകുക.'
        },
        sos: {
            title: 'എമർജൻസി SOS കേന്ദ്രം',
            subtitle: 'തത്സമയ അടിയന്തര സിഗ്നൽ പ്രക്ഷേപണവും രക്ഷാസേനയുമായുള്ള നേരിട്ടുള്ള ബന്ധവും',
            hero_desc: 'SOS പ്രവർത്തനക്ഷമമാക്കുന്നത് നിങ്ങളുടെ കൃത്യമായ ലൊക്കേഷനോടെ കോസ്റ്റ് വാച്ച് കൺട്രോൾ റൂമിലേക്ക് അടിയന്തര സന്ദേശം അയക്കുന്നു. അടിയന്തര സാഹചര്യത്തിൽ വിളിക്കുക:',
            tap_for_help: 'സഹായത്തിനായി അമർത്തുക',
            sos_live: 'SOS ലൈവ്',
            status_below: 'നിലവിലെ അവസ്ഥ താഴെ കാണുക',
            registering: 'രജിസ്റ്റർ ചെയ്യുന്നു…',
            please_wait: 'ദയവായി കാത്തിരിക്കുക',
            retry_sos: 'വീണ്ടും ശ്രമിക്കുക',
            tap_to_retry: 'വീണ്ടും അയക്കാൻ അമർത്തുക',
            sos_resolved: 'SOS പരിഹരിച്ചു',
            case_closed: 'കേസ് അവസാനിച്ചു',
            tracker_title: 'ലൈവ് എമർജൻസി ട്രാക്കർ',
            ref_id_label: 'SOS റഫറൻസ് ഐഡി',
            activated_at: 'ആരംഭിച്ച സമയം: {time}',
            location_captured_title: 'സ്ഥലം രേഖപ്പെടുത്തി',
            near_location: '{name}-ന് സമീപം (≈{dist} കി.മീ)',
            coords_captured: 'ജിപിഎസ് രേഖപ്പെടുത്തി',
            open_google_maps: 'ഗൂഗിൾ മാപ്പിൽ കാണുക',
            location_unavailable_title: 'സ്ഥലം ലഭ്യമല്ല',
            location_unavailable_desc: 'GPS ലൊക്കേഷൻ ലഭിച്ചില്ല. അധികൃതർ നിങ്ങളെ ഫോണിൽ ബന്ധപ്പെടും. സാധ്യമെങ്കിൽ 112 വിളിക്കുക.',
            authority_notes_title: 'അധികൃതരുടെ നിർദ്ദേശങ്ങൾ',
            warn_no_location: 'ലൊക്കേഷൻ പങ്കിടാനായില്ല. ഉദ്യോഗസ്ഥർ വിളിക്കുമ്പോൾ കൃത്യമായ സ്ഥലം പറയുക.',
            warn_pending_ack: 'ഉദ്യോഗസ്ഥരുടെ സ്ഥിരീകരണത്തിനായി കാത്തിരിക്കുന്നു.',
            reset_btn: 'SOS ട്രാക്കിംഗ് റീസെറ്റ് ചെയ്യുക',
            reset_confirm: 'റീസെറ്റ് ചെയ്യണമെന്ന് ഉറപ്പാണോ?',
            reset_done: 'ഈ ഉപകരണത്തിലെ SOS ട്രാക്കിംഗ് റീസെറ്റ് ചെയ്തു.',
            sos_active_already: 'SOS ഇതിനകം സജീവമാണ്! സഹായം എത്തിക്കൊണ്ടിരിക്കുന്നു.',
            failed_register: 'SOS രജിസ്ട്രേഷൻ പരാജയപ്പെട്ടു',
            floating_tooltip: 'എമർജൻസി SOS — സഹായത്തിനായി അമർത്തുക',
            helpline_title: 'ദേശീയ അടിയന്തര ഹെൽപ്പ്‌ലൈൻ നമ്പറുകൾ',
            helpline_subtitle: '24/7 ദുരന്ത നിവാരണ & രക്ഷാപ്രവർത്തന നമ്പറുകൾ.',
            cat_first_responders: 'പ്രഥമ പ്രതികരണ സേന',
            hl_112_desc: 'എല്ലാ അടിയന്തര സേവനങ്ങൾക്കും (24/7)',
            hl_100_desc: 'പോലീസ്',
            hl_101_desc: 'ഫയർ & റെസ്ക്യൂ',
            hl_108_desc: 'ആംബുലൻസ്',
            cat_disaster_auth: 'ദുരന്ത നിവാരണ അതോറിറ്റി',
            hl_ndma_desc: 'NDMA കൺട്രോൾ റൂം',
            hl_ndrf_desc: 'NDRF ആസ്ഥാനം',
            hl_state_desc: 'സംസ്ഥാന കൺട്രോൾ റൂം',
            hl_district_desc: 'ജില്ലാ ഹെൽപ്പ്‌ലൈൻ',
            cat_coast_guard: 'കോസ്റ്റ് ഗാർഡ് & മറൈൻ സുരക്ഷ',
            hl_cg_emergency: 'കോസ്റ്റ് ഗാർഡ് എമർജൻസി',
            hl_maritime_rescue: 'കടൽ രക്ഷാപ്രവർത്തനം',
            hl_fishermen: 'മത്സ്യത്തൊഴിലാളി ഹെൽപ്പ്‌ലൈൻ',
            hl_port_emergency: 'തുറമുഖ അടിയന്തര സഹായം'
        },
        sos_status: {
            PENDING: 'SOS അയച്ചു',
            ACKNOWLEDGED: 'ഉദ്യോഗസ്ഥർ സ്ഥിരീകരിച്ചു',
            IN_PROGRESS: 'രക്ഷാപ്രവർത്തനം പുരോഗമിക്കുന്നു',
            RESCUE_ASSIGNED: 'രക്ഷാസേനയെ നിയോഗിച്ചു',
            RESOLVED: 'പരിഹരിച്ചു / സുരക്ഷിതമാണ്',
            step_label: 'ഘട്ടം {step} · {status}',
            in_progress_text: 'നടന്നുകൊണ്ടിരിക്കുന്നു…'
        },
        shelters: {
            title: 'സുരക്ഷിത അഭയകേന്ദ്ര മാർഗ്ഗനിർദ്ദേശം',
            subtitle: 'ശേഷി, അപകടസാധ്യത, റോഡ് സൗകര്യം, ദൂരം എന്നിവ പരിശോധിച്ച് സുരക്ഷിത അഭയകേന്ദ്രങ്ങൾ നിർദ്ദേശിക്കുന്നു',
            find_card_title: 'ഏറ്റവും അടുത്തുള്ള സുരക്ഷിത കേന്ദ്രം കണ്ടെത്തുക',
            find_card_desc: 'കോസ്റ്റ് വാച്ച് ദൂരം മാത്രമല്ല, റോഡുകളുടെ സുരക്ഷയും ദുരന്ത സാധ്യതകളും വിശകലനം ചെയ്യുന്നു.',
            latitude_label: 'നിങ്ങളുടെ അക്ഷാംശം (Latitude)',
            longitude_label: 'നിങ്ങളുടെ രേഖാംശം (Longitude)',
            radius_label: 'തിരയൽ പരിധി (കി.മീ)',
            use_gps_btn: 'നിലവിലെ GPS ഉപയോഗിക്കുക',
            rank_recommend_btn: 'കേന്ദ്രങ്ങൾ കണ്ടെത്തുക',
            best_recommended_title: 'ഏറ്റവും അനുയോജ്യമായ കേന്ദ്രം',
            alternative_shelters_title: 'മറ്റ് കേന്ദ്രങ്ങൾ',
            suitability_score_label: 'അനുയോജ്യത സ്കോർ',
            occupancy_label: 'ശേഷി: {used}/{total}',
            spots_available: '{count} ഒഴിവുകൾ ഉണ്ട്',
            get_directions_btn: 'റൂട്ട് കാണുക',
            view_on_map_btn: 'മാപ്പിൽ കാണുക'
        },
        safety: {
            title: 'ദുരന്ത സുരക്ഷാ മാർഗ്ഗനിർദ്ദേശങ്ങൾ',
            subtitle: 'ചുഴലിക്കാറ്റ്, വെള്ളപ്പൊക്കം, കടലാക്രമണം എന്നിവ നേരിടാനുള്ള ഔദ്യോഗിക നിർദ്ദേശങ്ങൾ',
            dos_title: 'ചെയ്യേണ്ടവ (DO\'S)',
            do_1: 'ഔദ്യോഗിക മുന്നറിയിപ്പുകളും കാലാവസ്ഥാ ബുള്ളറ്റിനുകളും ശ്രദ്ധിക്കുക.',
            do_2: 'എമർജൻസി കിറ്റ് തയ്യാറാക്കി വയ്ക്കുക (വെള്ളം, ഉണങ്ങിയ ഭക്ഷണം, ടോർച്ച്, മരുന്നുകൾ).',
            do_3: 'സുനാമി/കൊടുങ്കാറ്റ് മുന്നറിയിപ്പ് ഉണ്ടായാൽ ഉടൻ ഉയർന്ന സ്ഥലങ്ങളിലേക്ക് മാറുക.',
            do_4: 'അധികാരികളുടെ നിർദ്ദേശങ്ങൾ കൃത്യമായി അനുസരിക്കുക.',
            do_5: 'പ്രധാന രേഖകൾ വാട്ടർപ്രൂഫ് ബാഗിൽ സൂക്ഷിക്കുക.',
            do_6: 'കുട്ടികൾക്കും പ്രായമായവർക്കും ഭിന്നശേഷിക്കാർക്കും മുൻഗണന നൽകുക.',
            do_7: 'കാറ്റും മഴയും ഉള്ളപ്പോൾ കടൽത്തീരത്ത് പോകരുത്.',
            donts_title: 'ചെയ്യരുതാത്തവ (DON\'TS)',
            dont_1: 'ഔദ്യോഗിക മുന്നറിയിപ്പുകൾ അവഗണിക്കരുത്.',
            dont_2: 'തിരമാലകൾ കാണാൻ കടൽത്തീരത്ത് പോകരുത്.',
            dont_3: 'വെള്ളം കയറിയ വീടുകളിൽ ഇലക്ട്രിക് സ്വിച്ചുകൾ പ്രവർത്തിപ്പിക്കരുത്.',
            dont_4: 'സോഷ്യൽ മീഡിയയിൽ വ്യാജ വാർത്തകൾ പ്രചരിപ്പിക്കരുത്.',
            dont_5: 'വെള്ളപ്പൊക്കമുള്ള റോഡുകളിലൂടെ വാഹനം ഓടിക്കരുത്.',
            dont_6: 'വളർത്തുമൃഗങ്ങളെ കെട്ടിയിടരുത്.',
            dont_7: 'സുരക്ഷിതമാണെന്ന് ഉറപ്പാക്കാതെ കേടുപാടുകൾ സംഭവിച്ച കെട്ടിടങ്ങളിലേക്ക് മടങ്ങരുത്.'
        },
        emergency_modal: {
            badge: 'അടിയന്തര മുന്നറിയിപ്പ്',
            radius_label: 'ബാധിത പ്രദേശം',
            severity_label: 'തീവ്രത',
            issued_time_label: 'പുറപ്പെടുവിച്ച സമയം',
            source_authority_label: 'അതോറിറ്റി',
            view_on_map_btn: 'മാപ്പിൽ കാണുക',
            acknowledge_btn: 'സ്ഥിരീകരിക്കുക'
        }
    },

    // =========================================================================
    // ODIA (or) — ଓଡ଼ିଆ
    // =========================================================================
    or: {
        app: {
            name: 'କୋଷ୍ଟୱାଚ୍',
            title: 'କୋଷ୍ଟୱାଚ୍ — ବିପର୍ଯ୍ୟୟ ଗୁଇନ୍ଦା ଓ ଜରୁରୀକାଳୀନ ପ୍ରତିକ୍ରିୟା ପ୍ଲାଟଫର୍ମ',
            headline: 'କୋଷ୍ଟୱାଚ୍ ଜରୁରୀକାଳୀନ କାର୍ଯ୍ୟ କେନ୍ଦ୍ର',
            tagline: 'ପ୍ରକୃତ-ସମୟ ବିପର୍ଯ୍ୟୟ ଗୁଇନ୍ଦା, ଉପକୂଳ ନିରୀକ୍ଷଣ ଓ ଉଦ୍ଧାର ନେଟୱାର୍କ।',
            quick_menu_title: 'ଦ୍ରୁତ କାର୍ଯ୍ୟ ମେନୁ'
        },
        auth: {
            portal_title: 'ସୁରକ୍ଷିତ ପ୍ରବେଶ ପୋର୍ଟାଲ୍',
            portal_subtitle: 'ଅଧିକୃତ କର୍ମଚାରୀ ଓ କମାଣ୍ଡ ନେଟୱାର୍କ',
            access_code_placeholder: 'ପ୍ରବେଶ କୋଡ୍ ଦିଅନ୍ତୁ',
            toggle_password: 'ପାସୱାର୍ଡ ଦେଖାନ୍ତୁ / ଲୁଚାନ୍ତୁ',
            invalid_code: 'ଅବୈଧ ପ୍ରବେଶ କୋଡ୍। ଦୟାକରି ପୁନଃ ଚେଷ୍ଟା କରନ୍ତୁ।',
            access_console_btn: 'କମାଣ୍ଡ କନସୋଲ୍ ପ୍ରବେଶ କରନ୍ତୁ',
            welcome_user: 'ସ୍ୱାଗତ, ନାଗରିକ',
            welcome_admin: 'ସ୍ୱାଗତ, ପ୍ରଶାସକ',
            trust_score: 'ବିଶ୍ୱସନୀୟତା ସ୍କୋର',
            status_online: 'ଅନଲାଇନ୍',
            status_live: 'ଲାଇଭ୍',
            logout: 'ଲଗଆଉଟ୍'
        },
        menu: {
            latest_alerts: 'ନୂତନ ସତର୍କତା',
            live_gis_map: 'ଲାଇଭ୍ GIS ମ୍ୟାପ୍',
            sos_distress: 'SOS / ଜରୁରୀକାଳୀନ ବିପଦ',
            helpline_dir: 'ହେଲ୍ପଲାଇନ୍ ଡାଇରେକ୍ଟୋରୀ',
            find_shelters: 'ନିରାପଦ ଆଶ୍ରୟସ୍ଥଳ',
            weather_conditions: 'ପାଣିପାଗ ଓ ସମୁଦ୍ର ସ୍ଥିତି',
            community_intel: 'ସମୁଦାୟ ଗୁଇନ୍ଦା ତଥ୍ୟ',
            future_risk: 'ଭବିଷ୍ୟତ ବିପଦ ଆକଳନ',
            safety_protocols: 'ବିପର୍ଯ୍ୟୟ ସୁରକ୍ଷା ନିୟମାବଳୀ'
        },
        nav: {
            map: 'ଲାଇଭ୍ ମ୍ୟାପ୍',
            report: 'ବିପର୍ଯ୍ୟୟ ରିପୋର୍ଟ କରନ୍ତୁ',
            sos: 'ଜରୁରୀକାଳୀନ SOS',
            social: 'ସୋସିଆଲ୍ ଫିଡ୍',
            shelters: 'ଆଶ୍ରୟସ୍ଥଳ ଖୋଜନ୍ତୁ',
            risk: 'ବିପଦ ଆକଳନ',
            safety: 'ସୁରକ୍ଷା ପରାମର୍ଶ',
            dashboard: 'ଡ୍ୟାସବୋର୍ଡ'
        },
        map: {
            title: 'ଲାଇଭ୍ ବିପର୍ଯ୍ୟୟ GIS ମ୍ୟାପ୍',
            subtitle: 'ପ୍ରକୃତ ସମୟରେ ବିପର୍ଯ୍ୟୟ କାର୍ଯ୍ୟକଳାପ ଓ ନିରୀକ୍ଷଣ',
            active_hazards_count: 'ସକ୍ରିୟ ବିପର୍ଯ୍ୟୟ: {count}',
            filter_all_severities: 'ସମସ୍ତ ତୀବ୍ରତା',
            filter_high_risk: 'ଉଚ୍ଚ ବିପଦ (🔴)',
            filter_medium_risk: 'ମଧ୍ୟମ ବିପଦ (🟠)',
            filter_low_risk: 'କମ୍ ବିପଦ (🟢)',
            filter_all_hazards: 'ସମସ୍ତ ବିପର୍ଯ୍ୟୟ ପ୍ରକାର',
            filter_floods: 'ବନ୍ୟା / ଜଳମଗ୍ନ',
            filter_cyclones: 'ବାତ୍ୟା / ଝଡ଼',
            filter_tsunami: 'ସୁନାମୀ / ଜୁଆର',
            filter_fires: 'ଅଗ୍ନିକାଣ୍ଡ',
            verified_recent_incidents: 'ଯାଞ୍ଚ ହୋଇଥିବା ସାମ୍ପ୍ରତିକ ଘଟଣା'
        },
        report: {
            title: 'ବିପର୍ଯ୍ୟୟ ଘଟଣା ରିପୋର୍ଟ କରନ୍ତୁ',
            subtitle: 'AI ଯାଞ୍ଚ ଓ ତୁରନ୍ତ ସହାୟତା ପାଇଁ ଫଟୋ/ଭିଡିଓ ପ୍ରମାଣ ସହିତ ରିପୋର୍ଟ ଦାଖଲ କରନ୍ତୁ',
            hazard_type_label: '୦୧ — ବିପର୍ଯ୍ୟୟ ବର୍ଗୀକରଣ',
            hazard_type_select: 'ବିପର୍ଯ୍ୟୟ ପ୍ରକାର ବାଛନ୍ତୁ',
            hazard_cyclone: 'ବାତ୍ୟା / ଭୟଙ୍କର ଝଡ଼',
            hazard_fire: 'ନିଆଁ / ଶିଳ୍ପ ଦୁର୍ଘଟଣା',
            hazard_flood: 'ଉପକୂଳ / ସହରାଞ୍ଚଳ ବନ୍ୟା',
            hazard_earthquake: 'ଭୂମିକମ୍ପ',
            hazard_landslide: 'ଭୂସ୍ଖଳନ',
            hazard_other: 'ଅନ୍ୟାନ୍ୟ ଜରୁରୀ ଘଟଣା',
            location_label: '୦୨ — ଘଟଣାସ୍ଥଳ',
            location_placeholder: 'ସ୍ଥାନର ନାମ ବା ଲ୍ୟାଣ୍ଡମାର୍କ ଲେଖନ୍ତୁ',
            gps_btn: 'GPS',
            severity_label: '୦୩ — ତୀବ୍ରତା ମୂଲ୍ୟାଙ୍କନ',
            severity_low_title: 'କମ୍ ତୀବ୍ରତା',
            severity_low_desc: 'ସାମାନ୍ୟ ବାଧା / ସତର୍କତା',
            severity_medium_title: 'ମଧ୍ୟମ ତୀବ୍ରତା',
            severity_medium_desc: 'ବିପଜ୍ଜନକ / ପଦକ୍ଷେପ ଆବଶ୍ୟକ',
            severity_high_title: 'ଉଚ୍ଚ / ଗମ୍ଭୀର ତୀବ୍ରତା',
            severity_high_desc: 'ଜୀବନ ପ୍ରତି ବିପଦ / ଅତ୍ୟନ୍ତ ଜରୁରୀ',
            description_label: '୦୪ — ପରିସ୍ଥିତିର ବିବରଣୀ',
            description_placeholder: 'ବିପର୍ଯ୍ୟୟର ଅବସ୍ଥା, ଫସି ରହିଥିବା ଲୋକ ବା ରାସ୍ତା ଅବରୋଧର ବିବରଣୀ ଦିଅନ୍ତୁ...',
            evidence_label: '୦୫ — ପ୍ରମାଣ ଅପଲୋଡ୍ (AI ଯାଞ୍ଚ)',
            evidence_drop_title: 'ଫଟୋ/ଭିଡିଓ ଚୟନ କରନ୍ତୁ ବା ଡ୍ରପ୍ କରନ୍ତୁ',
            evidence_drop_subtitle: 'ସମର୍ଥିତ ଫର୍ମାଟ୍: JPG, PNG, MP4, MOV (ସର୍ବାଧିକ 10MB)',
            submit_btn: 'ରିପୋର୍ଟ ଦାଖଲ କରନ୍ତୁ',
            submitting_btn: 'ଦାଖଲ ହେଉଛି...',
            fill_required_fields: 'ଦୟାକରି ସମସ୍ତ ଆବଶ୍ୟକୀୟ ତଥ୍ୟ ପୂରଣ କରନ୍ତୁ।'
        },
        sos: {
            title: 'ଜରୁରୀକାଳୀନ ବିପଦ SOS କେନ୍ଦ୍ର',
            subtitle: 'ପ୍ରକୃତ ସମୟ ସଙ୍କେତ ପ୍ରସାରଣ ଓ ଉଦ୍ଧାରକାରୀ ଦଳ ସହିତ ସିଧାସଳଖ ସଂଯୋଗ',
            hero_desc: 'SOS ସକ୍ରିୟ କଲେ ଆପଣଙ୍କ ସଠିକ୍ ସ୍ଥାନ ସହିତ କମାଣ୍ଡ ସେଣ୍ଟରକୁ ଜରୁରୀ ସଙ୍କେତ ପଠାଯାଏ। ଜୀବନ ରକ୍ଷା ପାଇଁ କଲ୍ କରନ୍ତୁ:',
            tap_for_help: 'ସାହାଯ୍ୟ ପାଇଁ ଦବାନ୍ତୁ',
            sos_live: 'SOS ଲାଇଭ୍',
            status_below: 'ସ୍ଥିତି ତଳେ ଦେଖନ୍ତୁ',
            registering: 'ପଞ୍ଜୀକରଣ ହେଉଛି…',
            please_wait: 'ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ',
            retry_sos: 'ପୁନଃ ଚେଷ୍ଟା କରନ୍ତୁ',
            tap_to_retry: 'ପୁନଃ ପଠାଇବାକୁ ଦବାନ୍ତୁ',
            sos_resolved: 'SOS ସମାଧାନ ହୋଇଛି',
            case_closed: 'କେସ୍ ବନ୍ଦ',
            tracker_title: 'ଲାଇଭ୍ ବିପଦ ଟ୍ରାକର୍',
            ref_id_label: 'SOS ରେଫରେନ୍ସ ନମ୍ବର',
            activated_at: 'ଆରମ୍ଭ ସମୟ: {time}',
            location_captured_title: 'ସ୍ଥାନ ଚିହ୍ନଟ ହେଲା',
            near_location: '{name} ନିକଟରେ (≈{dist} କିମି)',
            coords_captured: 'GPS ସ୍ଥାନ ସଂରକ୍ଷିତ',
            open_google_maps: 'ଗୁଗଲ୍ ମ୍ୟାପ୍ସରେ ଦେଖନ୍ତୁ',
            location_unavailable_title: 'ସ୍ଥାନ ଅନୁପଲବ୍ଧ',
            location_unavailable_desc: 'GPS ସ୍ଥାନ ମିଳିଲା ନାହିଁ। ଅଧିକାରୀମାନେ ଯୋଗାଯୋଗ କରିବେ। ସମ୍ଭବ ହେଲେ 112 ଡାଏଲ୍ କରନ୍ତୁ।',
            authority_notes_title: 'ଅଧିକାରୀଙ୍କ ନିର୍ଦ୍ଦେଶାବଳୀ',
            warn_no_location: 'ସ୍ଥାନ ସେୟାର ହୋଇପାରିଲା ନାହିଁ। କଲ୍ ଆସିଲେ ସଠିକ୍ ସ୍ଥାନ ଜଣାନ୍ତୁ।',
            warn_pending_ack: 'ଅଧିକାରୀଙ୍କ ଅନୁମୋଦନ ପାଇଁ ଅପେକ୍ଷା କରାଯାଉଛି।',
            reset_btn: 'SOS ଟ୍ରାକିଂ ରିସେଟ୍ କରନ୍ତୁ',
            reset_confirm: 'ରିସେଟ୍ କରିବାକୁ ଚାହାଁନ୍ତି କି?',
            reset_done: 'ଏହି ଡିଭାଇସରେ SOS ଟ୍ରାକିଂ ରିସେଟ୍ ହୋଇଛି।',
            sos_active_already: 'SOS ପୂର୍ବରୁ ସକ୍ରିୟ ଅଛି! ସାହାଯ୍ୟ ପହଞ୍ଚୁଛି।',
            failed_register: 'SOS ପଞ୍ଜୀକରଣ ବିଫଳ ହେଲା',
            floating_tooltip: 'ଜରୁରୀକାଳୀନ SOS — ତୁରନ୍ତ ସାହାଯ୍ୟ ପାଇଁ ଟ୍ୟାପ୍ କରନ୍ତୁ',
            helpline_title: 'ଜାତୀୟ ଜରୁରୀକାଳୀନ ହେଲ୍ପଲାଇନ୍ ତାଲିକା',
            helpline_subtitle: '୨୪/୭ ବିପର୍ଯ୍ୟୟ ପରିଚାଳନା ଓ ସହାୟତା ନମ୍ବର।',
            cat_first_responders: 'ପ୍ରାଥମିକ ପ୍ରତିକ୍ରିୟାକାରୀ ଦଳ',
            hl_112_desc: 'ସମସ୍ତ ଜରୁରୀକାଳୀନ (24/7)',
            hl_100_desc: 'ପୋଲିସ୍',
            hl_101_desc: 'ଅଗ୍ନିଶମ ବାହିନୀ',
            hl_108_desc: 'ଆମ୍ବୁଲାନ୍ସ',
            cat_disaster_auth: 'ବିପର୍ଯ୍ୟୟ ପରିଚାଳନା କର୍ତ୍ତୃପକ୍ଷ',
            hl_ndma_desc: 'NDMA କଣ୍ଟ୍ରୋଲ୍ ରୁମ୍',
            hl_ndrf_desc: 'NDRF ମୁଖ୍ୟାଳୟ',
            hl_state_desc: 'ରାଜ୍ୟ କଣ୍ଟ୍ରୋଲ୍ ରୁମ୍',
            hl_district_desc: 'ଜିଲ୍ଲା ହେଲ୍ପଲାଇନ୍',
            cat_coast_guard: 'ଉପକୂଳ ରକ୍ଷୀ ବାହିନୀ',
            hl_cg_emergency: 'କୋଷ୍ଟ ଗାର୍ଡ ଜରୁରୀ',
            hl_maritime_rescue: 'ସାମୁଦ୍ରିକ ଉଦ୍ଧାର'
        },
        sos_status: {
            PENDING: 'SOS ଦାଖଲ ହେଲା',
            ACKNOWLEDGED: 'ଅଧିକାରୀଙ୍କ ଦ୍ୱାରା ସ୍ୱୀକୃତ',
            IN_PROGRESS: 'ଉଦ୍ଧାର କାର୍ଯ୍ୟ ଚାଲିଛି',
            RESCUE_ASSIGNED: 'ଉଦ୍ଧାରକାରୀ ଦଳ ନିୟୋଜିତ',
            RESOLVED: 'ସମାଧାନ ହୋଇଛି / ସୁରକ୍ଷିତ',
            step_label: 'ପଦକ୍ଷେପ {step} · {status}',
            in_progress_text: 'ପ୍ରଗତିରେ ଅଛି…'
        },
        shelters: {
            title: 'ନିରାପଦ ଆଶ୍ରୟସ୍ଥଳ ମାର୍ଗଦର୍ଶିକା',
            subtitle: 'କ୍ଷମତା, ବିପଦ, ରାସ୍ତା ଓ ଦୂରତା ବିଶ୍ଳେଷଣ କରି ନିରାପଦ ଆଶ୍ରୟସ୍ଥଳ ଚୟନ',
            find_card_title: 'ନିକଟତମ ନିରାପଦ ଆଶ୍ରୟସ୍ଥଳ ଖୋଜନ୍ତୁ',
            find_card_desc: 'କୋଷ୍ଟୱାଚ୍ କେବଳ ଦୂରତା ନୁହେଁ, ରାସ୍ତାର ସୁରକ୍ଷା ଓ ବିପର୍ଯ୍ୟୟ ବିପଦ ମଧ୍ୟ ଯାଞ୍ଚ କରେ।',
            latitude_label: 'ଆପଣଙ୍କ ଅକ୍ଷାଂଶ (Latitude)',
            longitude_label: 'ଆପଣଙ୍କ ଦ୍ରାଘିମା (Longitude)',
            radius_label: 'ସନ୍ଧାନ ପରିସୀମା (କିମି)',
            use_gps_btn: 'ବର୍ତ୍ତମାନର GPS ନିଅନ୍ତୁ',
            rank_recommend_btn: 'ଆଶ୍ରୟସ୍ଥଳ ଚିହ୍ନଟ କରନ୍ତୁ',
            best_recommended_title: 'ସର୍ବୋତ୍ତମ ପରାମର୍ଶିତ ଆଶ୍ରୟସ୍ଥଳ',
            alternative_shelters_title: 'ବିକଳ୍ପ ଆଶ୍ରୟସ୍ଥଳ',
            suitability_score_label: 'ଉପଯୁକ୍ତତା ସ୍କୋର',
            occupancy_label: 'କ୍ଷମତା: {used}/{total}',
            spots_available: '{count} ସ୍ଥାନ ଖାଲି ଅଛି',
            get_directions_btn: 'ଦିଗଦର୍ଶନ ପାଆନ୍ତୁ',
            view_on_map_btn: 'ମ୍ୟାପରେ ଦେଖନ୍ତୁ'
        },
        safety: {
            title: 'ବିପର୍ଯ୍ୟୟ ସୁରକ୍ଷା ନିର୍ଦ୍ଦେଶାବଳୀ',
            subtitle: 'ବାତ୍ୟା, ବନ୍ୟା ଓ ସାମୁଦ୍ରିକ ବିପଦ ମୁକାବିଲା ପାଇଁ ସରକାରୀ ନିର୍ଦ୍ଦେଶାବଳୀ',
            dos_title: 'କଣ କରିବେ (DO\'S)',
            do_1: 'ସରକାରୀ ସତର୍କତା ବୁଲେଟିନ୍ ଏବଂ କୋଷ୍ଟୱାଚ୍ ଅପଡେଟ୍ ଉପରେ ନଜର ରଖନ୍ତୁ।',
            do_2: 'ଜରୁରୀକାଳୀନ ବ୍ୟାଗ୍ ପ୍ରସ୍ତୁତ ରଖନ୍ତୁ (ପାଣି, ଶୁଖିଲା ଖାଦ୍ୟ, ଟର୍ଚ୍ଚ, ଔଷଧ)।',
            do_3: 'ବାତ୍ୟା/ସୁନାମୀ ଚେତାବନୀ ମିଳିବା ମାତ୍ରେ ତୁରନ୍ତ ଉଚ୍ଚ ସ୍ଥାନ ବା ପକ୍କା ଆଶ୍ରୟସ୍ଥଳକୁ ଯାଆନ୍ତୁ।',
            do_4: 'ପ୍ରଶାସନ ଓ NDRF ର ସ୍ଥାନାନ୍ତର ନିର୍ଦ୍ଦେଶ ପାଳନ କରନ୍ତୁ।',
            do_5: 'ଜରୁରୀ କାଗଜପତ୍ର ୱାଟରପ୍ରୁଫ୍ ବ୍ୟାଗରେ ସୁରକ୍ଷିତ ରଖନ୍ତୁ।',
            do_6: 'ଶିଶୁ, ବୃଦ୍ଧ ଓ ଭିନ୍ନକ୍ଷମମାନଙ୍କୁ ପ୍ରାଥମିକତା ଦିଅନ୍ତୁ।',
            do_7: 'ବାତ୍ୟା ସମୟରେ ସମୁଦ୍ର କୂଳକୁ ଯାଆନ୍ତୁ ନାହିଁ।',
            donts_title: 'କଣ କରିବେ ନାହିଁ (DON\'TS)',
            dont_1: 'ସରକାରୀ ସତର୍କତାକୁ ଅଣଦେଖା କରନ୍ତୁ ନାହିଁ।',
            dont_2: 'ଢେଉ ଦେଖିବା ପାଇଁ ସମୁଦ୍ର କୂଳକୁ ଯାଆନ୍ତୁ ନାହିଁ।',
            dont_3: 'ପାଣି ପଶିଥିବା ଘରେ ବିଦ୍ୟୁତ୍ ଉପକରଣ ବ୍ୟବହାର କରନ୍ତୁ ନାହିଁ।',
            dont_4: 'ସୋସିଆଲ୍ ମିଡିଆରେ ଗୁଜବ ପ୍ରଚାର କରନ୍ତୁ ନାହିଁ।',
            dont_5: 'ଜଳମଗ୍ନ ରାସ୍ତା କିମ୍ବା ପୋଲ ଉପରେ ଗାଡ଼ି ଚଲାନ୍ତୁ ନାହିଁ।',
            dont_6: 'ଗୃହପାଳିତ ପଶୁମାନଙ୍କୁ ବାନ୍ଧି ରଖନ୍ତୁ ନାହିଁ।',
            dont_7: 'ସୁରକ୍ଷିତ ଘୋଷଣା ନହେବା ପର୍ଯ୍ୟନ୍ତ ଭଙ୍ଗା ଘରକୁ ଫେରନ୍ତୁ ନାହିଁ।'
        },
        emergency_modal: {
            badge: 'ଜରୁରୀକାଳୀନ ସତର୍କତା',
            radius_label: 'ପ୍ରଭାବିତ ପରିସୀମା',
            severity_label: 'ତୀବ୍ରତା ସ୍ତର',
            issued_time_label: 'ଜାରି ସମୟ',
            source_authority_label: 'ଉତ୍ସ କର୍ତ୍ତୃପକ୍ଷ',
            view_on_map_btn: 'ମ୍ୟାପରେ ଅଞ୍ଚଳ ଦେଖନ୍ତୁ',
            acknowledge_btn: 'ସ୍ୱୀକାର କରନ୍ତୁ ଓ ବନ୍ଦ କରନ୍ତୁ'
        }
    },

    // =========================================================================
    // KANNADA (kn) — ಕನ್ನಡ
    // =========================================================================
    kn: {
        app: {
            name: 'ಕೋಸ್ಟ್‌ವಾಚ್',
            title: 'ಕೋಸ್ಟ್‌ವಾಚ್ — ವಿಪತ್ತು ಗುಪ್ತಚರ ಮತ್ತು ತುರ್ತು ಪ್ರತಿಕ್ರಿಯೆ ವೇದಿಕೆ',
            headline: 'ಕೋಸ್ಟ್‌ವಾಚ್ ತುರ್ತು ಕಾರ್ಯಾಚರಣೆ ಕೇಂದ್ರ',
            tagline: 'ನೈಜ-ಸಮಯದ ವಿಪತ್ತು ಗುಪ್ತಚರ, ಕರಾವಳಿ ಕಣ್ಗಾವಲು ಮತ್ತು ರಕ್ಷಣಾ ನೆಟ್‌ವರ್ಕ್.',
            quick_menu_title: 'ತ್ವರಿತ ಕಾರ್ಯಾಚರಣೆಗಳ ಮೆನು'
        },
        auth: {
            portal_title: 'ಸುರಕ್ಷಿತ ಪ್ರವೇಶ ಪೋರ್ಟಲ್',
            portal_subtitle: 'ಅಧಿಕೃತ ಸಿಬ್ಬಂದಿ ಮತ್ತು ಕಮಾಂಡ್ ನೆಟ್‌ವರ್ಕ್',
            access_code_placeholder: 'ಪ್ರವೇಶ ಕೋಡ್ ನಮೂದಿಸಿ',
            toggle_password: 'ಪಾಸ್‌ವರ್ಡ್ ತೋರಿಸು / ಮರೆಮಾಡು',
            invalid_code: 'ಅಮಾನ್ಯ ಪ್ರವೇಶ ಕೋಡ್. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
            access_console_btn: 'ಕಮಾಂಡ್ ಕನ್ಸೋಲ್ ಪ್ರವೇಶಿಸಿ',
            welcome_user: 'ಸ್ವಾಗತ, ನಾಗರಿಕ',
            welcome_admin: 'ಸ್ವಾಗತ, ನಿರ್ವಾಹಕ',
            trust_score: 'ವಿಶ್ವಾಸಾರ್ಹತೆ ಸ್ಕೋರ್',
            status_online: 'ಆನ್‌ಲೈನ್',
            status_live: 'ಲೈವ್',
            logout: 'ಲಾಗ್‌ಔಟ್'
        },
        menu: {
            latest_alerts: 'ಇತ್ತೀಚಿನ ಎಚ್ಚರಿಕೆಗಳು',
            live_gis_map: 'ಲೈವ್ GIS ನಕ್ಷೆ',
            sos_distress: 'SOS / ತುರ್ತು ಅಪಾಯ',
            helpline_dir: 'ಸಹಾಯವಾಣಿ ಕೋಶ',
            find_shelters: 'ಸುರಕ್ಷಿತ ಆಶ್ರಯಗಳು',
            weather_conditions: 'ಹವಾಮಾನ ಮತ್ತು ಸಮುದ್ರ ಪರಿಸ್ಥಿತಿ',
            community_intel: 'ಸಮುದಾಯ ಗುಪ್ತಚರ',
            future_risk: 'ಭವಿಷ್ಯದ ಅಪಾಯದ ಅಂದಾಜು',
            safety_protocols: 'ವಿಪತ್ತು ಸುರಕ್ಷತಾ ನಿಯಮಗಳು'
        },
        nav: {
            map: 'ಲೈವ್ ನಕ್ಷೆ',
            report: 'ವಿಪತ್ತು ವರದಿ ಮಾಡಿ',
            sos: 'ತುರ್ತು SOS',
            social: 'ಸಾಮಾಜಿಕ ಫೀಡ್',
            shelters: 'ಆಶ್ರಯ ಹುಡುಕಿ',
            risk: 'ಅಪಾಯ ಅಂದಾಜು',
            safety: 'ಸುರಕ್ಷತಾ ಸಲಹೆಗಳು',
            dashboard: 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್'
        },
        map: {
            title: 'ಲೈವ್ ವಿಪತ್ತು GIS ನಕ್ಷೆ',
            subtitle: 'ನಿಗಾ ವಲಯಗಳಲ್ಲಿ ನೈಜ-ಸಮಯದ ವಿಪತ್ತು ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ರಕ್ಷಣಾ ಮಾಹಿತಿ',
            active_hazards_count: 'ಸಕ್ರಿಯ ವಿಪತ್ತುಗಳು: {count}',
            filter_all_severities: 'ಎಲ್ಲಾ ತೀವ್ರತೆಗಳು',
            filter_high_risk: 'ಹೆಚ್ಚಿನ ಅಪಾಯ (🔴)',
            filter_medium_risk: 'ಮಧ್ಯಮ ಅಪಾಯ (🟠)',
            filter_low_risk: 'ಕಡಿಮೆ ಅಪಾಯ (🟢)',
            filter_all_hazards: 'ಎಲ್ಲಾ ವಿಪತ್ತು ಪ್ರಕಾರಗಳು',
            filter_floods: 'ಪ್ರವಾಹ / ಮುಳುಗಡೆ',
            filter_cyclones: 'ಚಂಡಮಾರುತ / ಬಿರುಗಾಳಿ',
            filter_tsunami: 'ಸುನಾಮಿ / ಅಲೆಗಳು',
            filter_fires: 'ಬೆಂಕಿ ಅವಘಡ',
            verified_recent_incidents: 'ಪರಿಶೀಲಿಸಿದ ಇತ್ತೀಚಿನ ಘಟನೆಗಳು'
        },
        report: {
            title: 'ವಿಪತ್ತು ಘಟನೆಯನ್ನು ವರದಿ ಮಾಡಿ',
            subtitle: 'AI ಪರಿಶೀಲನೆ ಮತ್ತು ತ್ವರಿತ ಪ್ರತಿಕ್ರಿಯೆಗಾಗಿ ಫೋಟೋ/ವೀಡಿಯೊ ಪುರಾವೆಗಳೊಂದಿಗೆ ವರದಿ ಸಲ್ಲಿಸಿ',
            hazard_type_label: '01 — ವಿಪತ್ತು ವರ್ಗೀಕರಣ',
            hazard_type_select: 'ವಿಪತ್ತು ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
            hazard_cyclone: 'ಚಂಡಮಾರುತ / ಬಿರುಗಾಳಿ',
            hazard_fire: 'ಬೆಂಕಿ / ಕೈಗಾರಿಕಾ ಅವಘಡ',
            hazard_flood: 'ಕರಾವಳಿ / ನಗರ ಪ್ರವಾಹ',
            hazard_earthquake: 'ಭೂಕಂಪ',
            hazard_landslide: 'ಭೂಕುಸಿತ',
            hazard_other: 'ಇತರ ತುರ್ತು ಘಟನೆ',
            location_label: '02 — ಘಟನಾ ಸ್ಥಳ',
            location_placeholder: 'ಸ್ಥಳದ ಹೆಸರು ಅಥವಾ ಲ್ಯಾಂಡ್‌ಮಾರ್ಕ್ ನಮೂದಿಸಿ',
            gps_btn: 'GPS',
            severity_label: '03 — ತೀವ್ರತೆ ಮೌಲ್ಯಮಾಪನ',
            severity_low_title: 'ಕಡಿಮೆ ತೀವ್ರತೆ',
            severity_low_desc: 'ಸಣ್ಣ ಅಡಚಣೆ / ಎಚ್ಚರಿಕೆ',
            severity_medium_title: 'ಮಧ್ಯಮ ತೀವ್ರತೆ',
            severity_medium_desc: 'ಅಪಾಯಕಾರಿ / ಪ್ರತಿಕ್ರಿಯೆ ಅಗತ್ಯವಿದೆ',
            severity_high_title: 'ಹೆಚ್ಚಿನ / ಗಂಭೀರ ತೀವ್ರತೆ',
            severity_high_desc: 'ಪ್ರಾಣಾಪಾಯ / ಅತ್ಯಂತ ತುರ್ತು',
            description_label: '04 — ಪರಿಸ್ಥಿತಿಯ ವಿವರಣೆ',
            description_placeholder: 'ವಿಪತ್ತಿನ ಸ್ಥಿತಿ, ಸಿಲುಕಿರುವ ಜನರು ಅಥವಾ ರಸ್ತೆ ತಡೆಗಳ ವಿವರಗಳನ್ನು ಬರೆಯಿರಿ...',
            evidence_label: '05 — ಪುರಾವೆ ಅಪ್‌ಲೋಡ್ (AI ಪರಿಶೀಲನೆ)',
            evidence_drop_title: 'ಫೋಟೋ/ವೀಡಿಯೊ ಆಯ್ಕೆಮಾಡಿ ಅಥವಾ ಡ್ರಾಪ್ ಮಾಡಿ',
            evidence_drop_subtitle: 'ಬೆಂಬಲಿತ ಸ್ವರೂಪಗಳು: JPG, PNG, MP4, MOV (ಗರಿಷ್ಠ 10MB)',
            submit_btn: 'ವಿಪತ್ತು ವರದಿ ಸಲ್ಲಿಸಿ',
            submitting_btn: 'ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...',
            fill_required_fields: 'ದಯವಿಟ್ಟು ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ವಿವರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.'
        },
        sos: {
            title: 'ತುರ್ತು SOS ಕೇಂದ್ರ',
            subtitle: 'ನೈಜ-ಸಮಯದ ತುರ್ತು ಸಿಗ್ನಲ್ ಪ್ರಸಾರ ಮತ್ತು ರಕ್ಷಣಾ ಪಡೆಯೊಂದಿಗೆ ನೇರ ಸಂಪರ್ಕ',
            hero_desc: 'SOS ಸಕ್ರಿಯಗೊಳಿಸುವುದರಿಂದ ನಿಮ್ಮ ನಿಖರವಾದ ಸ್ಥಳದೊಂದಿಗೆ ಕೋಸ್ಟ್‌ವಾಚ್ ಕಮಾಂಡ್ ಕೇಂದ್ರಕ್ಕೆ ತುರ್ತು ಸಂದೇಶ ರವಾನೆಯಾಗುತ್ತದೆ. ಜೀವ ರಕ್ಷಣೆಗಾಗಿ ಕರೆ ಮಾಡಿ:',
            tap_for_help: 'ಸಹಾಯಕ್ಕಾಗಿ ಒತ್ತಿ',
            sos_live: 'SOS ಲೈವ್',
            status_below: 'ಸ್ಥಿತಿ ಕೆಳಗೆ ನೋಡಿ',
            registering: 'ನೋಂದಾಯಿಸಲಾಗುತ್ತಿದೆ…',
            please_wait: 'ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ',
            retry_sos: 'ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ',
            tap_to_retry: 'ಮತ್ತೆ ಕಳುಹಿಸಲು ಒತ್ತಿ',
            sos_resolved: 'SOS ಪರಿಹರಿಸಲಾಗಿದೆ',
            case_closed: 'ಪ್ರಕರಣ ಮುಕ್ತಾಯ',
            tracker_title: 'ಲೈವ್ ತುರ್ತು ಟ್ರ್ಯಾಕರ್',
            ref_id_label: 'SOS ಉಲ್ಲೇಖ ಸಂಖ್ಯೆ',
            activated_at: 'ಪ್ರಾರಂಭವಾದ ಸಮಯ: {time}',
            location_captured_title: 'ಸ್ಥಳ ದಾಖಲಾಗಿದೆ',
            near_location: '{name} ಹತ್ತಿರ (≈{dist} ಕಿ.ಮೀ)',
            coords_captured: 'GPS ನಿರ್ದೇಶಾಂಕಗಳು ಲಭ್ಯವಿದೆ',
            open_google_maps: 'ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್‌ನಲ್ಲಿ ನೋಡಿ',
            location_unavailable_title: 'ಸ್ಥಳ ಲಭ್ಯವಿಲ್ಲ',
            location_unavailable_desc: 'GPS ಸ್ಥಳ ಪಡೆಯಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ಅಧಿಕಾರಿಗಳು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ. ಸಾಧ್ಯವಾದರೆ 112 ಗೆ ಕರೆ ಮಾಡಿ.',
            authority_notes_title: 'ಅಧಿಕಾರಿಗಳ ನಿರ್ದೇಶನಗಳು',
            warn_no_location: 'ಸ್ಥಳ ಹಂಚಿಕೆಯಾಗಿಲ್ಲ. ಅಧಿಕಾರಿಗಳು ಕರೆ ಮಾಡಿದಾಗ ನಿಮ್ಮ ನಿಖರ ಸ್ಥಳ ತಿಳಿಸಿ.',
            warn_pending_ack: 'ಅಧಿಕಾರಿಗಳ ಅನುಮೋದನೆಗಾಗಿ ಕಾಯಲಾಗುತ್ತಿದೆ.',
            reset_btn: 'SOS ಟ್ರ್ಯಾಕಿಂಗ್ ಮರುಹೊಂದಿಸಿ',
            reset_confirm: 'ಮರುಹೊಂದಿಸಲು ಬಯಸುವಿರಾ?',
            reset_done: 'ಈ ಸಾಧನದಲ್ಲಿ SOS ಟ್ರ್ಯಾಕಿಂಗ್ ಮರುಹೊಂದಿಸಲಾಗಿದೆ.',
            sos_active_already: 'SOS ಈಗಾಗಲೇ ಸಕ್ರಿಯವಾಗಿದೆ! ಸಹಾಯ ಬರುತ್ತಿದೆ.',
            failed_register: 'SOS ನೋಂದಣಿ ವಿಫಲವಾಗಿದೆ',
            floating_tooltip: 'ತುರ್ತು SOS — ತಕ್ಷಣದ ಸಹಾಯಕ್ಕಾಗಿ ಟ್ಯಾಪ್ ಮಾಡಿ',
            helpline_title: 'ರಾಷ್ಟ್ರೀಯ ತುರ್ತು ಸಹಾಯವಾಣಿ ಡೈರೆಕ್ಟರಿ',
            helpline_subtitle: '24/7 ವಿಪತ್ತು ನಿರ್ವಹಣೆ ಮತ್ತು ರಕ್ಷಣಾ ಸೇವಾ ಸಂಖ್ಯೆಗಳು.',
            cat_first_responders: 'ಮೊದಲ ಪ್ರತಿಕ್ರಿಯೆ ಪಡೆಗಳು',
            hl_112_desc: 'ಎಲ್ಲಾ ತುರ್ತು ಸೇವೆಗಳಿಗೆ (24/7)',
            hl_100_desc: 'ಪೊಲೀಸ್',
            hl_101_desc: 'ಅಗ್ನಿಶಾಮಕ ದಳ',
            hl_108_desc: 'ಆಂಬ್ಯುಲೆನ್ಸ್',
            cat_disaster_auth: 'ವಿಪತ್ತು ನಿರ್ವಹಣಾ ಪ್ರಾಧಿಕಾರ',
            hl_ndma_desc: 'NDMA ನಿಯಂತ್ರಣ ಕೊಠಡಿ',
            hl_ndrf_desc: 'NDRF ಕೇಂದ್ರ ಕಚೇರಿ',
            hl_state_desc: 'ರಾಜ್ಯ ನಿಯಂತ್ರಣ ಕೊಠಡಿ',
            hl_district_desc: 'ಜಿಲ್ಲಾ ಸಹಾಯವಾಣಿ',
            cat_coast_guard: 'ಕರಾವಳಿ ಕಾವಲು ಪಡೆ',
            hl_cg_emergency: 'ಕೋಸ್ಟ್ ಗಾರ್ಡ್ ತುರ್ತು',
            hl_maritime_rescue: 'ಸಮುದ್ರ ರಕ್ಷಣೆ'
        },
        sos_status: {
            PENDING: 'SOS ಸಲ್ಲಿಸಲಾಗಿದೆ',
            ACKNOWLEDGED: 'ಅಧಿಕಾರಿಗಳು ಗುರುತಿಸಿದ್ದಾರೆ',
            IN_PROGRESS: 'ರಕ್ಷಣಾ ಕಾರ್ಯಾಚರಣೆ ಪ್ರಗತಿಯಲ್ಲಿದೆ',
            RESCUE_ASSIGNED: 'ರಕ್ಷಣಾ ತಂಡವನ್ನು ನಿಯೋಜಿಸಲಾಗಿದೆ',
            RESOLVED: 'ಪರಿಹರಿಸಲಾಗಿದೆ / ಸುರಕ್ಷಿತ',
            step_label: 'ಹಂತ {step} · {status}',
            in_progress_text: 'ಪ್ರಗತಿಯಲ್ಲಿದೆ…'
        },
        shelters: {
            title: 'ಸುರಕ್ಷಿತ ಆಶ್ರಯ ಮಾರ್ಗದರ್ಶಿ',
            subtitle: 'ಸಾಮರ್ಥ್ಯ, ಅಪಾಯ, ರಸ್ತೆ ಮತ್ತು ದೂರವನ್ನು ವಿಶ್ಲೇಷಿಸಿ ಸುರಕ್ಷಿತ ಆಶ್ರಯಗಳನ್ನು ಶಿಫಾರಸು ಮಾಡುವುದು',
            find_card_title: 'ಹತ್ತಿರದ ಸುರಕ್ಷಿತ ಆಶ್ರಯವನ್ನು ಹುಡುಕಿ',
            find_card_desc: 'ಕೋಸ್ಟ್‌ವಾಚ್ ಕೇವಲ ದೂರವನ್ನು ಮಾತ್ರವಲ್ಲದೆ ರಸ್ತೆ ಸುರಕ್ಷತೆ ಮತ್ತು ಅಪಾಯಗಳನ್ನು ಪರಿಶೀಲಿಸುತ್ತದೆ.',
            latitude_label: 'ನಿಮ್ಮ ಅಕ್ಷಾಂಶ (Latitude)',
            longitude_label: 'ನಿಮ್ಮ ರೇಖಾಂಶ (Longitude)',
            radius_label: 'ಹುಡುಕಾಟ ವ್ಯಾಪ್ತಿ (ಕಿ.ಮೀ)',
            use_gps_btn: 'ಪ್ರಸ್ತುತ GPS ಬಳಸಿ',
            rank_recommend_btn: 'ಆಶ್ರಯಗಳನ್ನು ಶ್ರೇಣೀಕರಿಸಿ',
            best_recommended_title: 'ಉತ್ತಮ ಶಿಫಾರಸು ಮಾಡಿದ ಆಶ್ರಯ',
            alternative_shelters_title: 'ಪರ್ಯಾಯ ಆಶ್ರಯಗಳು',
            suitability_score_label: 'ಸೂಕ್ತತೆಯ ಸ್ಕೋರ್',
            occupancy_label: 'ಸಾಮರ್ಥ್ಯ: {used}/{total}',
            spots_available: '{count} ಸ್ಥಳಗಳು ಲಭ್ಯವಿವೆ',
            get_directions_btn: 'ದಿಕ್ಕುಗಳನ್ನು ಪಡೆಯಿರಿ',
            view_on_map_btn: 'ನಕ್ಷೆಯಲ್ಲಿ ನೋಡಿ'
        },
        safety: {
            title: 'ವಿಪತ್ತು ಸುರಕ್ಷತಾ ಮಾರ್ಗಸೂಚಿಗಳು',
            subtitle: 'ಚಂಡಮಾರುತ, ಪ್ರವಾಹ ಮತ್ತು ಕರಾವಳಿ ಅಪಾಯಗಳ ನಿರ್ವಹಣೆಗೆ ಅಧಿಕೃತ ಮಾರ್ಗಸೂಚಿಗಳು',
            dos_title: 'ಮಾಡಬೇಕಾದವು (DO\'S)',
            do_1: 'ಅಧಿಕೃತ ಬುಲೆಟಿನ್‌ಗಳು ಮತ್ತು ಕೋಸ್ಟ್‌ವಾಚ್ ಎಚ್ಚರಿಕೆಗಳನ್ನು ಗಮನಿಸಿ.',
            do_2: 'ತುರ್ತು ಬ್ಯಾಗ್ ಸಿದ್ಧವಾಗಿಡಿ (ನೀರು, ಒಣ ಆಹಾರ, ಟಾರ್ಚ್, ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ).',
            do_3: 'ಸುನಾಮಿ/ಚಂಡಮಾರುತದ ಮುನ್ಸೂಚನೆ ಸಿಕ್ಕ ಕೂಡಲೇ ಎತ್ತರದ ಸ್ಥಳಗಳಿಗೆ ತೆರಳಿ.',
            do_4: 'ಆಡಳಿತದ ಸ್ಥಳಾಂತರ ಆದೇಶಗಳನ್ನು ತಕ್ಷಣ ಪಾಲಿಸಿ.',
            do_5: 'ಪ್ರಮುಖ ದಾಖಲೆಗಳನ್ನು ಜಲನಿರೋಧಕ ಚೀಲಗಳಲ್ಲಿ ಸುರಕ್ಷಿತವಾಗಿಡಿ.',
            do_6: 'ಮಕ್ಕಳು, ವೃದ್ಧರು ಮತ್ತು ವಿಶೇಷ ಚೇತನರಿಗೆ ಆದ್ಯತೆ ನೀಡಿ.',
            do_7: 'ಚಂಡಮಾರುತದ ಸಮಯದಲ್ಲಿ ಸಮುದ್ರ ತೀರಕ್ಕೆ ಹೋಗಬೇಡಿ.',
            donts_title: 'ಮಾಡಬಾರದವು (DON\'TS)',
            dont_1: 'ಅಧಿಕೃತ ಎಚ್ಚರಿಕೆಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸಬೇಡಿ.',
            dont_2: 'ಅಲೆಗಳನ್ನು ನೋಡಲು ಸಮುದ್ರ ತೀರಕ್ಕೆ ಹೋಗಬೇಡಿ.',
            dont_3: 'ನೀರು ತುಂಬಿದ ಮನೆಗಳಲ್ಲಿ ವಿದ್ಯುತ್ ಉಪಕರಣಗಳನ್ನು ಮುಟ್ಟಬೇಡಿ.',
            dont_4: 'ಸಾಮಾಜಿಕ ಜಾಲತಾಣಗಳಲ್ಲಿ ವದಂತಿಗಳನ್ನು ಹರಡಬೇಡಿ.',
            dont_5: 'ಮುಳುಗಡೆಯಾದ ರಸ್ತೆಗಳಲ್ಲಿ ವಾಹನ ಚಲಾಯಿಸಬೇಡಿ.',
            dont_6: 'ಸಾಕುಪ್ರಾಣಿಗಳನ್ನು ಕಟ್ಟಿ ಹಾಕಬೇಡಿ.',
            dont_7: 'ಸುರಕ್ಷಿತ ಎಂದು ಘೋಷಿಸುವವರೆಗೆ ಹಾನಿಗೊಳಗಾದ ಮನೆಗಳಿಗೆ ಮರಳಬೇಡಿ.'
        },
        emergency_modal: {
            badge: 'ತುರ್ತು ಎಚ್ಚರಿಕೆ',
            radius_label: 'ಬಾಧಿತ ವ್ಯಾಪ್ತಿ',
            severity_label: 'ತೀವ್ರತೆ ಮಟ್ಟ',
            issued_time_label: 'ಹೊರಡಿಸಿದ ಸಮಯ',
            source_authority_label: 'ಮೂಲ ಪ್ರಾಧಿಕಾರ',
            view_on_map_btn: 'ನಕ್ಷೆಯಲ್ಲಿ ವಲಯವನ್ನು ನೋಡಿ',
            acknowledge_btn: 'ಒಪ್ಪಿ ಮುಚ್ಚಿ'
        }
    }
};

// =============================================================================
// I18N ENGINE CONTROLLER
// =============================================================================

class I18nManager {
    constructor() {
        this.currentLang = this.getSavedLanguage();
        this.translations = TRANSLATIONS;
        this.supportedLanguages = SUPPORTED_LANGUAGES;
    }

    getSavedLanguage() {
        try {
            const saved = localStorage.getItem('coastwatch_lang');
            if (saved && SUPPORTED_LANGUAGES[saved]) {
                return saved;
            }
        } catch (_) {}
        return 'en';
    }

    setLanguage(lang) {
        if (!this.supportedLanguages[lang]) {
            console.warn(`[i18n] Language "${lang}" is not supported. Falling back to "en".`);
            lang = 'en';
        }

        this.currentLang = lang;
        try {
            localStorage.setItem('coastwatch_lang', lang);
        } catch (_) {}

        document.documentElement.setAttribute('lang', lang);
        const langMeta = this.supportedLanguages[lang];
        if (langMeta && langMeta.dir) {
            document.documentElement.setAttribute('dir', langMeta.dir);
        }

        // Sync any language selector dropdowns
        const selectors = document.querySelectorAll('.lang-selector, #langSelector, #loginLangSelector, .lang-selector-hidden');
        selectors.forEach(sel => {
            if (sel) sel.value = lang;
        });

        // Sync custom dropdown wrappers
        document.querySelectorAll('.lang-selector-wrapper').forEach(wrapper => {
            const currentLabel = wrapper.querySelector('.lang-current-label');
            const items = wrapper.querySelectorAll('.lang-dropdown-item');
            if (currentLabel && langMeta) {
                const labelText = langMeta.name === 'English' ? `${langMeta.flag} English` : `${langMeta.flag} ${langMeta.nativeName} (${langMeta.name})`;
                currentLabel.textContent = labelText;
            }
            if (items.length) {
                items.forEach(item => {
                    const isSelected = item.getAttribute('data-value') === lang;
                    item.classList.toggle('active', isSelected);
                    item.setAttribute('aria-selected', isSelected ? 'true' : 'false');
                });
            }
        });

        // Translate the static DOM tree
        this.translatePage();

        // Dispatch custom event so dynamic components in script.js can refresh
        window.dispatchEvent(new CustomEvent('coastwatch:languageChanged', { detail: { lang } }));
    }

    getLanguage() {
        return this.currentLang;
    }

    /**
     * Translate a translation key with optional interpolation params and fallback.
     * Example: t('shelters.occupancy_label', { used: 120, total: 300 })
     */
    t(keyPath, params = {}, fallback = null) {
        if (!keyPath || typeof keyPath !== 'string') return '';

        let value = this.lookup(this.translations[this.currentLang], keyPath);

        // Fallback to English if missing in current language
        if (value === undefined && this.currentLang !== 'en') {
            value = this.lookup(this.translations.en, keyPath);
        }

        // Final fallback
        if (value === undefined) {
            value = fallback !== null ? fallback : keyPath;
        }

        if (typeof value !== 'string') return value;

        // Parameter interpolation: {paramName}
        return value.replace(/\{([a-zA-Z0-9_]+)\}/g, (match, paramName) => {
            return params[paramName] !== undefined ? params[paramName] : match;
        });
    }

    lookup(obj, path) {
        if (!obj || !path) return undefined;
        const keys = path.split('.');
        let current = obj;
        for (const k of keys) {
            if (current && typeof current === 'object' && k in current) {
                current = current[k];
            } else {
                return undefined;
            }
        }
        return current;
    }

    /**
     * Scans and updates all elements with data-i18n attributes.
     */
    translatePage(root = document) {
        // 1. Text content: data-i18n="key"
        const textElements = root.querySelectorAll('[data-i18n]');
        textElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!key) return;

            // Check if element has an icon child we should preserve
            const icon = el.querySelector('i');
            const iconHtml = icon ? icon.outerHTML + ' ' : '';

            // Check for nested badge or pill if any
            const translatedText = this.t(key);
            if (translatedText) {
                if (icon) {
                    // Check if icon is first child
                    if (el.childNodes[0] === icon || (el.childNodes[0].nodeType === 3 && el.childNodes[1] === icon)) {
                        el.innerHTML = `${iconHtml}<span>${this.escape(translatedText)}</span>`;
                    } else {
                        el.textContent = translatedText;
                    }
                } else {
                    el.textContent = translatedText;
                }
            }
        });

        // 2. HTML content: data-i18n-html="key"
        const htmlElements = root.querySelectorAll('[data-i18n-html]');
        htmlElements.forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (!key) return;
            const translatedHtml = this.t(key);
            if (translatedHtml) {
                el.innerHTML = translatedHtml;
            }
        });

        // 3. Placeholders: data-i18n-placeholder="key"
        const placeholderElements = root.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (!key) return;
            const translated = this.t(key);
            if (translated) {
                el.setAttribute('placeholder', translated);
            }
        });

        // 4. Titles (tooltips): data-i18n-title="key"
        const titleElements = root.querySelectorAll('[data-i18n-title]');
        titleElements.forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            if (!key) return;
            const translated = this.t(key);
            if (translated) {
                el.setAttribute('title', translated);
            }
        });

        // 5. Aria Labels: data-i18n-aria-label="key"
        const ariaElements = root.querySelectorAll('[data-i18n-aria-label]');
        ariaElements.forEach(el => {
            const key = el.getAttribute('data-i18n-aria-label');
            if (!key) return;
            const translated = this.t(key);
            if (translated) {
                el.setAttribute('aria-label', translated);
            }
        });

        // 6. Option elements with data-i18n inside select dropdowns
        const optionElements = root.querySelectorAll('option[data-i18n]');
        optionElements.forEach(opt => {
            const key = opt.getAttribute('data-i18n');
            if (!key) return;
            const translated = this.t(key);
            if (translated) {
                opt.textContent = translated;
            }
        });
    }

    escape(str) {
        return String(str == null ? '' : str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }
}

// Global Singleton Instance
window.i18n = new I18nManager();
window.t = (key, params, fallback) => window.i18n.t(key, params, fallback);

// Convenience wrapper for changeLanguage
window.changeLanguage = function(lang) {
    if (window.i18n) {
        window.i18n.setLanguage(lang);
    }
};

// Custom Language Dropdown Controller (Accessible, SaaS Modern Component)
function initCustomLanguageDropdowns() {
    document.querySelectorAll('.lang-selector-wrapper').forEach(wrapper => {
        if (wrapper.dataset.dropdownInit) return;
        wrapper.dataset.dropdownInit = 'true';

        const trigger = wrapper.querySelector('.lang-selector-trigger');
        const menu = wrapper.querySelector('.lang-dropdown-menu');
        const items = wrapper.querySelectorAll('.lang-dropdown-item');
        if (!trigger || !menu) return;

        // Toggle dropdown on trigger click
        trigger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = wrapper.classList.contains('is-open');
            // Close any other open dropdowns first
            document.querySelectorAll('.lang-selector-wrapper.is-open').forEach(w => {
                if (w !== wrapper) {
                    w.classList.remove('is-open');
                    const t = w.querySelector('.lang-selector-trigger');
                    if (t) t.setAttribute('aria-expanded', 'false');
                }
            });
            wrapper.classList.toggle('is-open', !isOpen);
            trigger.setAttribute('aria-expanded', String(!isOpen));
        });

        // Handle item selection
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                const val = item.getAttribute('data-value');
                if (val && window.changeLanguage) {
                    window.changeLanguage(val);
                }
                wrapper.classList.remove('is-open');
                trigger.setAttribute('aria-expanded', 'false');
                trigger.focus();
            });
        });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.lang-selector-wrapper')) {
            document.querySelectorAll('.lang-selector-wrapper.is-open').forEach(w => {
                w.classList.remove('is-open');
                const t = w.querySelector('.lang-selector-trigger');
                if (t) t.setAttribute('aria-expanded', 'false');
            });
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.lang-selector-wrapper.is-open').forEach(w => {
                w.classList.remove('is-open');
                const t = w.querySelector('.lang-selector-trigger');
                if (t) {
                    t.setAttribute('aria-expanded', 'false');
                    t.focus();
                }
            });
        }
    });
}

// Automatically initialize on DOM ready
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.i18n.setLanguage(window.i18n.getLanguage());
            initCustomLanguageDropdowns();
        });
    } else {
        window.i18n.setLanguage(window.i18n.getLanguage());
        initCustomLanguageDropdowns();
    }
}
