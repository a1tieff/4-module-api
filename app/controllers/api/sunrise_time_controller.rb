class Api::SunriseTimeController < Api::ApplicationController

  def show_sunrise_time
    # city = params[:city]
    # puts city

    latitude = params[:latitude]
    longitude = params[:longitude]

    uri = URI.parse("https://api.geodatasource.com/city?key=AIW5ZMXNJQAHQF295JP6LMKMY7F1TGDM&format=json&lat=#{ latitude }&lng=#{ longitude }")
    data = Net::HTTP.get(uri)

    render json: data
  end
end
