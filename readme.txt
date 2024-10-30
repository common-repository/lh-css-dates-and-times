=== LH CSS Dates and Times ===
Contributors: shawfactor
Donate link: https://lhero.org/portfolio/lh-css-dates-and-times/
Tags: css, personalisation, styles, dates, design
Requires at least: 5.0
Tested up to: 6.0
Stable tag: 1.10
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
 
CSS Date Time
 
== Description ==

**LH CSS Dates and Times** dynamically adds dynamic **Date & Time** classes to your HTML body element. This enables you to So you customise the design of your website based on the date or time.

It does it the only foolproof way for your visitors, ie via javascript.

= Dynamic body Classes Include =

* Date
* Hour
* AM or PM
* time of day e.g. night, morning, afternoon, or evening
* Day of the Week
* Day of the Month
* Month
* Day of the Year
* Year

See the FAQ for a full explanation of the selectors

**Like this plugin? Please consider [leaving a 5-star review](https://wordpress.org/support/view/plugin-reviews/lh-css-dates-and-times/).**

**Love this plugin or want to help the LocalHero Project? Please consider [making a donation](https://lhero.org/portfolio/lh-css-dates-and-times/).**


== Installation ==

1. Click "Add New" from the Plugins page in your WordPress Dashboard
1. Enter "LH CSS Dates and Times" in the "Search Plugins" field
1. Locate LH CSS Dates and Times and click "Add Now" followed by "Activate"
1. That is it, there is no need to configure this plugin


== Frequently Asked Questions ==

= Can you explain what you could do with this plugin? =

This plugin enables you to have a different design for you site depending on trhe time or date!

For example a red, green, and gold design on Christmas day, or a firework background on the fourth of July.

The only limit is your imagination!

= How does LH CSS Dates and Times work? =

LH CSS Dates and Times automatically adds dynamic Date & Time classes to your HTML body element via javascript.

= Why would I want this? =

So you can add CSS selectors based on those classes to override and modify your site design.

For example sunrise background in the morninging? Just add the class to your CSS stylesheet.

.cssdt-evening { background-image: src('/wp-content/uploads/2017/10/sunrise.jpg'); }

= Why is is better to do this via Javascript? =

Two reasons!

1. Dynamically adding this via javascript will not break your caching plugins ever!
2. Your visitors time and deate is often different to the websites. This plugin uses javascript so the classes are based on the visitors time.

= Why can't I see these classes when I view source? =

Because they are added by javascript on the domcontentloaded event. This still means they can be used for styling purposes though.

= How can I see the classes? =

You can use dev tools (or equivalents in other browsers) to inspect the the DOM elements and you will see the classes.

= Where can I see this is in action? =

Go to to the plugin [donation page](https://lhero.org/portfolio/lh-css-dates-and-times/) to see a live (very trivial) example.

= What selectors does it have? =

1. Simple date ie the first of january 2018 would be 'cssdt-01-01-2017'
1. Hour ie Midnight would be 'cssdt-hour-0'
1. Time of day (this is divided into 4 blocks, night being -
0-6, morning 6-12, afternnon 12-18, and evening being 18-24. So 3PM would be 'cssdt-afternoon'
1. AM or PM , so 3PM would be 'cssdt-pm'
1. Weekday eg 'cssdt-tuesday'
1. Monthday so the first of January 2018 would be 'cssdt-monthday-01'
1. Month so the first of January 2018 would be 'cssdt-january'
1. Day of year, so the first of January 2018 would be 'cssdt-yearday-01-01'
1. Year, so the first of January 2018 would be 'cssdt-2018'

= What is something does not work?  =

LH CSS Dates and Times, and all [https://lhero.org](LocalHero) plugins are made to WordPress standards. Therefore they should work with all well coded plugins and themes. However not all plugins and themes are well coded (and this includes many popular ones). 

If something does not work properly, firstly deactivate ALL other plugins and switch to one of the themes that come with core, e.g. twentyfifteen, twentysixteen etc.

If the problem persists pleasse leave a post in the support forum: [https://wordpress.org/support/plugin/lh-css-dates-and-times/](https://wordpress.org/support/plugin/lh-css-dates-and-times/) . I look there regularly and resolve most queries.

= What if I need a feature that is not in the plugin?  =

Please contact me for custom work and enhancements here: [https://shawfactor.com/contact/](https://shawfactor.com/contact/)

 == Changelog == 

**1.00 October 20, 2017**  
Initail release

**1.02 October 22, 2017**  
Added icons to plugin file

**1.03 October 24, 2017**  
Changed readme.txt

**1.04 March 05, 2018**  
Moved scipt to footer

**1.05 March 05, 2019**  
Added direct path check

**1.10 May 31, 2021**  
Better readme and javascript improvement

**1.11 September 23, 2021**  
fixed javascript registration