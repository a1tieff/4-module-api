class SynthroomController < ApplicationController
  def index
    fxes = Fx.all
    @fxes_array = []

    fxes.each do |fx|
      @fxes_array.push(fx.as_json_for_rack)
    end
  end
end
