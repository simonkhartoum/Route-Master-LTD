class CarsController < ApplicationController
    def index
        cars = Car.all
        render json: cars, include: :owner
    end

    def create
    car = Car.create!(car_params)
    render json: car, status: :created
    end

    def show 
        car = find_car
        render json:car, include: :owner
    end

    def update
        car = find_car
        if car
          car.update(car_update_params)
          render json: car
        else
          render json: { error: "car not found" }, status: :not_found
        end
    end

    def destroy
        car = find_car
        car.destroy
        head :no_content
    end

    private

    def find_car
        Car.find(params[:id])
    end

    def car_params
        params.permit(:number_plate, :image, :owner_id,:driver_name,:driver_contact,:route)
    end
    def car_update_params
        params.permit(:driver_name,:route)
    end
end











