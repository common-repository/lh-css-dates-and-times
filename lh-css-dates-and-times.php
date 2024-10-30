<?php
/**
 * Plugin Name: LH CSS Dates and Times
 * Plugin URI: https://lhero.org/portfolio/lh-css-dates-and-times/
 * Author: Peter Shaw
 * Author URI: https://shawfactor.com
 * Text Domain: lh_css_dates_and_times
 * Domain Path: /languages
 * Requires PHP: 5.5
 * Version: 1.11
 * Description: Adds class attributes with the date and time to the body class via javascript
 */

if ( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly


if (!class_exists('LH_CSS_dates_and_times_plugin')) {


class LH_CSS_dates_and_times_plugin {

private static $instance;

static function return_plugin_namespace(){

    return 'lh_css_dates_and_times';

    }


    
public function register_scripts_and_styles() {
if (!is_admin()){
    
if (!class_exists('LH_Register_file_class')) {
     

     
    include_once('includes/lh-register-file-class.php');
    
}


    $add_array = array();
    $add_array['defer']  = 'defer';
    $add_array['id'] = self::return_plugin_namespace().'-script';

    $h_css_dates_and_times_core_script = new LH_Register_file_class( self::return_plugin_namespace().'-script', plugin_dir_path( __FILE__ ).'scripts/lh-css-dates-and-times.js', plugins_url( '/scripts/lh-css-dates-and-times.js', __FILE__ ), true, array(), true, $add_array);

    unset($add_array);

}



}


public function add_hooks( $classes ) {
    
wp_enqueue_script(self::return_plugin_namespace().'-script');

return $classes;   
    
}

public function plugin_init(){

//allow for translations    
load_plugin_textdomain( self::return_plugin_namespace(), false, basename( dirname( __FILE__ ) ) . '/languages' ); 
    

//register the core script
add_action( 'template_redirect', array($this, 'register_scripts_and_styles'), 10 ); 
    
    
//enqueue the jacescript when the body classes are added, note we are not actually adding classes just enqueueing
add_filter( 'body_class', array($this,'add_hooks'),10,1);
    
    
}

    /**
     * Gets an instance of our plugin.
     *
     * using the singleton pattern
     */
    public static function get_instance(){
        if (null === self::$instance) {
            self::$instance = new self();
        }
 
        return self::$instance;
    }

    
    
    

public function __construct() {
    
    
    //run our hooks on plugins loaded to as we may need checks       
    add_action( 'plugins_loaded', array($this,'plugin_init'));
    

    
}


}

$lh_css_dates_and_times_instance = LH_CSS_dates_and_times_plugin::get_instance();


}



?>