<?php 

namespace Home\Controller; 

use Think\Controller;

class AdminController extends Controller {
	
	protected function _initialize() 
	{
		header('Content-Type:text/html; charset="utf-8"');
	}
	
	public function login()
	{	
		if(IS_POST) {
			$username = I('post.user_name', '', 'htmlspecialchars');
			$pwd = I('post.password', '');
			
			if(empty($username)) {
				$this->error('Please enter email address.');
			}
			if(!preg_match('/^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/', $username)) {
				$this->error('Email address only can be composed of letters, figure and underline.');
			}
			if(empty($pwd)) {
				$this->error('Please input password.');
			}
			
			$info = D('Users')->UserLogin($username, $pwd);
			
			if(empty($info)) {
				$this->error('Incorrect account address or password. Please try again.');
			}
			set_cookies($info, $_POST['remember']);
			set_session($info);
			$this->success('Login successful.', U('index/index'));
			
		} else {
			$this->display('user/login');
		}
		
	}
	
	public function register()
	{
		if(IS_POST) {
			$user = D('Users');
			
			if($user->create()) {
				
				$user->email = $user->user_name;
				$user->last_time = date('Y-m-d H:i:s');
				
				if($user->add()) {
					$this->success('Registration is successful, welcome you to join.', U('user/index'));
				}
			}
			$this->error('Sorry, Registration failed.');
			//$this->error($userModel->getError());
			
		}else {
			$this->display('user/register');
		}
	}
	
	public function forgotpassword()
	{
		if(IS_POST) {
		
		}else {
			$this->display('user/forgotpassword');
		}
		
		
	}
	
	
	public function loginout()
	{
		session('[destroy]');
		cookie('user_id', null);
		cookie('user_name', null);
		cookie('password', null);
	}
	
	public function verify()
	{
		
		
	}
	

	/**
	 * 通用分页列表数据集获取方法
	 * 可以通过url参数传递where条件,例如:  index.html?name=asdfasdfasdfddds
	 * 可以通过url空值排序字段和方式,例如: index.html?_field=id&_order=asc
	 * 可以通过url参数r指定每页数据条数,例如: index.html?r=5
	 *
	 * @param sting|Model  $model   模型名或模型实例
	 * @param array        $where   where查询条件(优先级: $where>$_REQUEST>模型设定)
	 * @param array|string $order   排序条件,传入null时使用sql默认排序或模型属性(优先级最高);
	 *                              请求参数中如果指定了_order和_field则据此排序(优先级第二);
	 *                              否则使用$order参数(如果$order参数,且模型也没有设定过order,则取主键降序);
	 *
	 * @param boolean      $field   单表模型用不到该参数,要用在多表join时为field()方法指定参数
	 * @return array|false
	 * 返回数据集
	 */
	protected function lists($model, $where = array(), $order = '', $field = true)
	{
		$options  = array();
		$REQUEST  = (array)I('request.');
		if(is_string($model)) {
			$model = M($model);
		}

		$OPT = new \ReflectionProperty($model,'options');
		$OPT->setAccessible(true);

		$pk = $model->getPk();
		if($order === null) {
			//order置空
		}else if(isset($REQUEST['_order']) && isset($REQUEST['_field']) && in_array(strtolower($REQUEST['_order']),array('desc','asc'))) {
			$options['order'] = '`'.$REQUEST['_field'].'` '.$REQUEST['_order'];
		}elseif($order === '' && empty($options['order']) && !empty($pk)) {
			$options['order'] = $pk.' desc';
		}elseif($order) {
			$options['order'] = $order;
		}
		unset($REQUEST['_order'],$REQUEST['_field']);

		if(empty($where)) {
			$where = array('status'=>array('egt',0));
		}
		if(!empty($where)) {
			$options['where'] = $where;
		}
		$options = array_merge((array)$OPT->getValue($model), $options);
		$total = $model->where($options['where'])->count();

		if(isset($REQUEST['r'])) {
			$listRows = (int)$REQUEST['r'];
		}else{
			$listRows = C('LIST_ROWS') > 0 ? C('LIST_ROWS') : 10;
		}
		$page = new \Think\Page($total, $listRows, $REQUEST);
		if($total>$listRows) {
			$page->setConfig('theme','%FIRST% %UP_PAGE% %LINK_PAGE% %DOWN_PAGE% %END% %HEADER%');
		}
		$p = $page->show();
		$this->assign('_page', $p? $p: '');
		$this->assign('_total',$total);
		$options['limit'] = $page->firstRow.','.$page->listRows;
		$model->setProperty('options',$options);

		return $model->field($field)->select();
	}	
	
	
	

	
}


