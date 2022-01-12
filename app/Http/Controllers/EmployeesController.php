<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeesController extends Controller
{
    public function index()
    {
        $employee = Employee::all();
        return response()->json([
            'employee' => $employee,
        ], 200);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name'       => 'required',
            'department' => 'required',
            'section'    => 'required',
            'email'      => 'required',
        ]);
        Employee::create([
            'name'       => $request->name,
            'department' => $request->department,
            'section'    => $request->section,
            'email'      => $request->email,
            'status'     => $request->status,
        ]);
    }
    public function delete($id)
    {

        $employee = Employee::find($id);
        $employee->delete();
    }
    public function edit($id)
    {
        $employee = Employee::find($id);
        return response()->json([
            'employee' => $employee,
        ], 200);
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'name'       => 'required',
            'department' => 'required',
            'section'    => 'required',
            'email'      => 'required',
        ]);
        $employee = Employee::find($id)->update([
            'name'       => $request->name,
            'department' => $request->department,
            'section'    => $request->section,
            'email'      => $request->email,
            'status'     => $request->status,
        ]);
        return response()->json([
            'employee' => $employee,
        ], 200);
    }
}
