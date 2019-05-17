<?php
define('WP_CACHE', true); // Added by WP Rocket
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'shopnaklik' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '`ga=AxaJ>d<(__f?(tWm>yH2aQ<; 19v|R1bIp0#4i11kqDy~$0QP.$G~nO|S6rL' );
define( 'SECURE_AUTH_KEY',  '5McBy3CV@lzbL]]cJ!=%waHT<_G~xdH$`cMqd<GG^Y9gM1G7jYo|GDLUJs9CCl^m' );
define( 'LOGGED_IN_KEY',    'liW|^xIwl;mHYT}iQQ&|VHYcc@2G|~sARs6BnO<u:7grGt}Dw4i3lCW2(Iq7noOh' );
define( 'NONCE_KEY',        'N{I_S6y@GGMa]ZB-]c>!Hhxd4H*!U(<&>DO5OP/7glBN ;@2|72m;?t_|;6O@S:F' );
define( 'AUTH_SALT',        '/~7mu}gX^Rp`)^~lGiRS$q[Xk8T pIweTa:0.&2p5pEg!< .<j%#*b`kn@7)uFPS' );
define( 'SECURE_AUTH_SALT', 'Yq/y/8p2&W+]>TeU;~h:3-yK<igArMh1aBBs[v^4rD7E!u@ n)|_{S#szb$>H)pM' );
define( 'LOGGED_IN_SALT',   'a=R@xgkT&gMj*H>v+V6j^=J_gLmqd=lYyl#Z;Uw;+pK@^@}!G?=L]]2< J>$vm>?' );
define( 'NONCE_SALT',       'L#`Ft4Rok>Hzap;2gu/93Exsc:t!8gjc7;)X6ldB@ME9doU5,-|l-Eo6oj@)t&9c' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
