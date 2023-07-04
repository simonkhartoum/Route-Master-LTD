class CarsController < ApplicationController
    def index
        cars = Car.all
        render json: cars
    end
    def create
    car = Car.create!(car_params)
    render json: car, status: :created
    end
    def show 
        car = find_car
        render json:car, include: :owner
    end

    private

    def find_car
        Car.find(params[:id])
    end

    def car_params
        params.permit(:number_plate, :image, :owner_id,:driver_name,:driver_contact)
    end
end