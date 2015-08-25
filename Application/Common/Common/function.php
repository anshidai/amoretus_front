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

/**
 *  获取订单状态
 *
 * @access  public
 * @param   int         $user_id        用户ID号
 * @param   int         $num            列表最大数量
 * @param   int         $start          列表起始位置
 * @return  array       $order_list     订单列表
 */
function get_order_status($order_status = 0, $pay_status = 0, $shipping_status = 0)
{
	
	switch($order_status) {
		case 0:
			$order_tips = 'Unconfirmed'; //未确认
			break;
		case 1:
		case 5:
		case 6:
			$order_tips = 'Confirmed'; //1-已确认 5-已分单 6-部分分单
			break;
		case 2:
			$order_tips = 'Canceled'; //取消
			break;
		case 3:
			$order_tips = 'Invalid'; //无效
			break;
		case 4:
			$order_tips = 'Returned purchase'; //退货
			break;
		default:
			$order_tips = 'Unconfirmed';
			break;
	}
	
	switch($pay_status) {
		case 0:
			$pay_tips = 'Unpaid'; //未付款
			break;
		case 1:
			$pay_tips = 'Paying'; //付款中
			break;
		case 2:
			$pay_tips = 'Payed'; //已付款
			break;
		default:
			$pay_tips = 'Unpaid';
			break;
	}
	
	switch($shipping_status) {
		case 0:
			$shipping_tips = 'Unshipped'; //未发货
			break;
		case 1:
		case 6:
			$shipping_tips = 'Shipped'; //1-已发货 6-已发货(部分商品)
			break;
		case 2:
			$shipping_tips = 'Received'; //已收货
			break;
		case 3:
			$shipping_tips = 'Preparing'; //备货中
			break;
		case 4:
			$shipping_tips = 'Shipped(part of all)'; //已发货(部分商品)
			break;
		case 5:
			$shipping_tips = 'Preparing'; //发货中(处理分单)
			break;
		default:
			break;
			$shipping_tips = 'Unshipped';
			break;
	}
	
	
	return array(
		'order_tips' => $order_tips,
		'pay_tips' => $pay_tips,
		'shipping_tips' => $shipping_tips,
		);
}

/**
 * 记录订单操作记录
 *
 * @access  public
 * @param   string  $order_sn           订单编号
 * @param   integer $order_status       订单状态
 * @param   integer $shipping_status    配送状态
 * @param   integer $pay_status         付款状态
 * @param   string  $note               备注
 * @param   string  $username           用户名，用户自己的操作则为 buyer
 * @return  void
 */
function order_action($order_id, $order_sn, $order_status, $shipping_status, $pay_status, $note = '', $username = null, $place = 0)
{
    if(is_null($username)) {
        $username = session('user_name');
    }

	$data = array(
		'order_id' => $order_id,
		'action_user' => $username,
		'order_status' => $order_status,
		'shipping_status' => $shipping_status,
		'pay_status' => $pay_status,
		'action_place' => $place,
		'action_note' => $note,
		'log_time' => time(),
	);
	M('OrderAction')->add($data);
}

/**
 * 记录帐户变动
 * @param   int     $user_id        用户id
 * @param   float   $user_money     可用余额变动
 * @param   float   $frozen_money   冻结余额变动
 * @param   int     $rank_points    等级积分变动
 * @param   int     $pay_points     消费积分变动
 * @param   string  $change_desc    变动说明
 * @param   int     $change_type    变动类型：参见常量文件
 * @return  void
 */
function log_account_change($user_id, $user_money = 0, $frozen_money = 0, $rank_points = 0, $pay_points = 0, $change_desc = '', $change_type = ACT_OTHER)
{
    /* 插入帐户变动记录 */
    $account_log = array(
        'user_id'       => $user_id,
        'user_money'    => $user_money,
        'frozen_money'  => $frozen_money,
        'rank_points'   => $rank_points,
        'pay_points'    => $pay_points,
        'change_time'   => time(),
        'change_desc'   => $change_desc,
        'change_type'   => $change_type
    );
	M('AccountLog')->add($account_log);

    /* 更新用户信息 */
    $sql = "UPDATE ".C('DB_PREFIX')."users ".
            " SET user_money = user_money + ('$user_money')," .
            " frozen_money = frozen_money + ('$frozen_money')," .
            " rank_points = rank_points + ('$rank_points')," .
            " pay_points = pay_points + ('$pay_points')" .
            " WHERE user_id = '$user_id' LIMIT 1";
    M()->query($sql);
}

/**
 * 处理红包（下订单时设为使用，取消（无效，退货）订单时设为未使用
 * @param   int     $bonus_id   红包编号
 * @param   int     $order_id   订单号
 * @param   int     $is_used    是否使用了
 */
function change_user_bonus($bonus_id, $order_id, $is_used = true)
{
	$data = array(
		'used_time' => time(),
		'order_id' => $order_id,
	);
	if(!$is_used) {
		$data['used_time'] = 0;
		$data['order_id'] = 0;
	}
	M('UserBonus')->where("bonus_id = '$bonus_id'")->save($data);
}

function getRegion($region_id = 0)
{
	$key = 'region_all';
	
	$data = S($key);
	if(empty($data)) {
		$res = M('Region')->select();
		if($res) {
			foreach($res as $k=>$val) {
				$data[$val['region_id']] = $val;
			}
			S($key, $data, 3600);
		}
		unset($res);
	}
	return $region_id? $data[$region_id]: $data;
}



