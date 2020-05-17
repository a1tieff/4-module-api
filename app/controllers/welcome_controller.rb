class WelcomeController < ApplicationController

  def index
    uri = URI.parse("https://api.geodatasource.com/city?key=AIW5ZMXNJQAHQF295JP6LMKMY7F1TGDM&format=json&lat=37.3861&lng=-122.084")
    # http = Net::HTTP.new(uri.host, uri.port)
    @data = Net::HTTP.get(uri)
  end
end
