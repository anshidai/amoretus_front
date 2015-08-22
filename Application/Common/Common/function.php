<?php 


function set_cookies($userinfo = array(), $remember = null)
{
	if(empty($userinfo)) {
		cookie('user_id', null);
		cookie('user_name', null);
		cookie('password', null);
		
	} elseif($remember) {
		$expire = 3600 * 24 * 15;
		cookie('user_name', $userinfo['user_name'], $expire);
		cookie('user_id', $userinfo['user_id'], $expire);
		cookie('password', $userinfo['password'], $expire);
	}
}

function set_session($userinfo = array())
{
	if(empty($userinfo)) {
		session('[destroy]');
	}else {
		session('user_id', $userinfo['user_id']);
		session('user_name', $userinfo['user_name']);
		session('email', $userinfo['email']);
	}
}


function check_login_status()
{
	$user = D('Users');
	
	$session_user_id = session('user_id');
	//session 不存在，检查cookie
	if(empty($session_user_id)) {
		$cookie_user_id = cookie('user_id');
		$cookie_user_id = intval($cookie_user_id);
		
		if(!empty($cookie_user_id)) {
			$info = $user->getUserInfo($cookie_user_id);
			
			if($info && $info['password'] == cookie('password')) {
				session('user_id',$info['user_id']);
				session('user_name',$info['user_name']);

				update_user_info();
				
			} else {
				//没有找到这个记录. 则清除cookie
				$time = time() - 3600;
				cookie('user_id',  null);
				cookie('password',  null);
			}
		}
		
	}
}

/**
* 更新登录时间，登录次数及登录ip
*/
function update_user_info()
{
	$user_id = session('user_id');
	
	if(!$user_id) return false;
	
	$user = D('Users');
	
	$data['last_ip'] = get_client_ip(0, true);
	$data['last_login'] = time();
	$user->where("user_id='{$user_id}'")->setField($data);
	$user->where("user_id='{$user_id}'")->setInc('visit_count', 1);
	
}

/**
 * 重写 URL 地址
 *
 * @access  public
 * @param   string  $app        执行程序
 * @param   array   $params     参数数组
 * @param   string  $append     附加字串
 * @param   integer $page       页数
 * @param   string  $keywords   搜索关键词字符串
 * @return  void
 */
function build_uri($app, $params, $append = '', $page = 0, $keywords = '', $size = 0)
{
	static $rewrite = true;

    if($rewrite === null) {
       //$rewrite = intval($GLOBALS['_CFG']['rewrite']);
    }
	
	$args = array(
		'cid'   => 0,
		'gid'   => 0,
		'bid'   => 0,
		'acid'  => 0,
		'aid'   => 0,
		'sid'   => 0,
		'gbid'  => 0,
		'auid'  => 0,
		'sort'  => '',
		'order' => '',
		);

    extract(array_merge($args, $params));
	$uri = '';
    switch($app) {
		case 'category':
            if(empty($cid)) return false;
			
            if($rewrite) {
				$append = strtolower($append);
				$append = str_replace(array('  ', ' '), '-', $append);
				$uri = 'cate-'.urlencode(preg_replace('/[\.|\/|\?|&|\+|\\\|\'|"|,]+/', '', $append)).'-c'.$cid;
				if(!empty($page)) {
					$uri .= '-' . $page;
				}
				if(!empty($sort)) {
					$uri .= '-' . $sort;
				}
				if(!empty($order)) {
					$uri .= '-' . $order;
				}
				if(!empty($p)) {
					$uri .= '-' . $p;
				}
			}
			$uri = "index.php?c=category&a=index&cid=$cid";
			break;
			 
		 case 'goods':
			if(empty($gid)) {
                return false;
            } else {
				$uri = "index.php?c=goods&a=view&gid=$gid";
                //$uri = $rewrite ? 'goods-' . $gid : 'goods.php?id=' . $gid;
            }
			break;
			
		case 'brand':
			if(empty($bid)) {
                return false;
            }else {
				if($rewrite) {
					$uri = 'brand-' . $bid;
					if(isset($cid)) {
						$uri .= '-c' . $cid;
					}
					if(!empty($page)) {
						$uri .= '-' . $page;
					}
					if(!empty($sort)) {
						$uri .= '-' . $sort;
					}
					if(!empty($order)) {
						$uri .= '-' . $order;
					}
                }
                else
                {
                    $uri = 'brand.php?id=' . $bid;
                    if(!empty($cid)) {
                        $uri .= '&amp;cat=' . $cid;
                    }
                    if(!empty($page)) {
                        $uri .= '&amp;page=' . $page;
                    }
                    if(!empty($sort)) {
                        $uri .= '&amp;sort=' . $sort;
                    }
                    if(!empty($order)) {
                        $uri .= '&amp;order=' . $order;
                    }
                }
			}
		
			break;
			
		default:
            return false;
            break;
	}
	
	if($rewrite) {
		$uri .= '.html';
	}
    return C('SITE_URL').'/'.$uri;
	
}


function get_ip()
{
	return get_client_ip();
}



