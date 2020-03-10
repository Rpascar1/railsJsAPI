# frozen_string_literal: true

class HomeController < ApplicationController
  def index
    redirect_to file: 'public/index.html'
   end
end
