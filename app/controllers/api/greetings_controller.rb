class Api::GreetingsController < ApplicationController
  def index
    greeting = Greeting.order(Arel.sql('RANDOM()')).first
    render json: { message: greeting.message }
  end
end
