<?php

namespace App\Domain\Home;

use App\Http\Controllers\Controller;

class HomePageController extends Controller
{
    /**
     * Loads the Home Page.
     *
     * @return \Illuminate\View\View
     */
    public function show()
    {
        return view('app/home');
    }
}
