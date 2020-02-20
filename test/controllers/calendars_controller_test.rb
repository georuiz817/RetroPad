require 'test_helper'

class CalendarsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @calendar = calendars(:one)
  end

  test "should get index" do
    get calendars_url, as: :json
    assert_response :success
  end

  test "should create calendar" do
    assert_difference('Calendar.count') do
      post calendars_url, params: { calendar: { title: @calendar.title, title_date: @calendar.title_date } }, as: :json
    end

    assert_response 201
  end

  test "should show calendar" do
    get calendar_url(@calendar), as: :json
    assert_response :success
  end

  test "should update calendar" do
    patch calendar_url(@calendar), params: { calendar: { title: @calendar.title, title_date: @calendar.title_date } }, as: :json
    assert_response 200
  end

  test "should destroy calendar" do
    assert_difference('Calendar.count', -1) do
      delete calendar_url(@calendar), as: :json
    end

    assert_response 204
  end
end
