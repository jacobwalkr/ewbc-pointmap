class ReportsController < ApplicationController
  def index
    @reports = Report.all
  end
  
  def create
    report = Report.new(report_params)
    report.save
    
    redirect_to({ action: "show", id: report.id })
  end
  
  def show
    @report = Report.find_by_id(params[:id])
  end
  
  private
    def report_params
      params.require(:report).permit(:body, :location_id)
    end
end
