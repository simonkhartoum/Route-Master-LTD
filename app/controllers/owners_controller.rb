class OwnersController < ApplicationController
    def show 
        owner = find_owner
        render json: owner
    end
    private

    def find_owner
        Owner.find(params[:id])
    end

end
