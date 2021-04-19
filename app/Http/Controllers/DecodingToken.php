try {
  # Note: You must provide the list of supported algorithms in order to prevent 
  # an attacker from bypassing the signature verification. See:
  # https://auth0.com/blog/critical-vulnerabilities-in-json-web-token-libraries/
  $token = JWT::decode($token_string, $jwt_key, ['HS256']);
  $error = false;
} catch(\Firebase\JWT\ExpiredException $e) {
  $token = false;
  $error = 'expired';
  $error_description = 'The token has expired';
} catch(\Firebase\JWT\SignatureInvalidException $e) {
  $token = false;
  $error = 'invalid';
  $error_description = 'The token provided was malformed';
} catch(Exception $e) {
  $token = false;
  $error = 'unauthorized';
  $error_description = $e->getMessage();
}
 
if($error) {
  header('HTTP/1.1 401 Unauthorized');
  echo json_encode(array(
    'error'=>$error, 
    'error_description'=>$error_description
  ));
  die();
} else {
  // Now $token has all the data that we encoded in it originally
  print_r($token);
}