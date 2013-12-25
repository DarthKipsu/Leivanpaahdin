class LightsController < ApplicationController

	def home
		@hue = Hue.new
	end

end