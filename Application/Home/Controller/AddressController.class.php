<?php 

namespace Home\Controller;


class AddressController extends AdminController {
	
	
	public function index()
	{
		
		$this->display('User/address_index');
	}
	
	public function add()
	{
		
		$this->display('User/address_add');
	}
	
	
}