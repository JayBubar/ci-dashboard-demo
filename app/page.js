'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, Clock, AlertTriangle, TrendingUp, TrendingDown, Users, DollarSign, Target, FileText, Eye, Calendar, User, BookOpen } from 'lucide-react';

export default function Dashboard() {
  const [currentMonth, setCurrentMonth] = useState(6);
  const [currentYear] = useState(2024);
  const [completedReports, setCompletedReports] = useState(new Set(['overall-1', 'overall-4', 'new-donor-6', 'actionable-1', 'retention-5']));
  const [completionDates, setCompletionDates] = useState({
    'overall-1': '2024-07-03',
    'overall-4': '2024-07-04',
    'new-donor-6': '2024-07-18',
    'actionable-1': '2024-09-12',
    'retention-5': '2024-07-25'
  });

  const customerData = {
    organizationName: "University Foundation",
    fiscalYearStart: "July",
    lastUpdated: "2024-08-13 6:00 AM",
    kpis: {
      percentageOfPlan: { value: 67.3, target: 100, trend: 2.1 },
      donorRetention: { value: 84.2, previousYear: 78.9, trend: 5.3 },
      avgGiftGrowth: { value: 12.8, previousMonth: -3.2, trend: 16.0 },
      pastDueReports: { count: 3, urgent: 1 }
    }
  };

  const months = [
    'July', 'August', 'September', 'October', 'November', 'December',
    'January', 'February', 'March', 'April', 'May', 'June'
  ];

  const quarters = {
    'Q1': [0, 1, 2],
    'Q2': [3, 4, 5],
    'Q3': [6, 7, 8],
    'Q4': [9, 10, 11]
  };

  const reportsData = {
    0: {
      title: "Foundation Setting & Historical Analysis",
      weeks: [
        {
          title: "Week 1: Organizational Performance Baseline",
          role: "Executive Leadership, Board Members",
          reports: [
            {
              id: 'overall-1',
              name: 'Historical Summary Data (Fiscal Year Basis)',
              difficulty: 'red',
              dueDate: '2024-07-05',
              question: 'What are our multi-year performance trends and where are we headed?',
              action: 'Establish organizational benchmarks and set strategic direction',
              sampleData: { totalDonors: 4247, avgGift: 892, retention: 78.9, completedDate: '2024-07-03' }
            },
            {
              id: 'overall-4',
              name: 'Giving Pyramid - Last Full Fiscal Year',
              difficulty: 'red',
              dueDate: '2024-07-05',
              question: 'Where should we focus our fundraising efforts for maximum ROI?',
              action: 'Identify donor segments driving 80% of revenue',
              sampleData: { top5percent: 89.94, top10percent: 94.80, completedDate: '2024-07-04' }
            }
          ]
        },
        {
          title: "Week 2: Donor Concentration & Risk Assessment",
          role: "Major Gifts Officers, Development Directors",
          reports: [
            {
              id: 'overall-5',
              name: 'Donor Concentration Analysis (Top 100)',
              difficulty: 'yellow',
              dueDate: '2024-07-12',
              question: 'Who are our most critical relationships and engagement levels?',
              action: 'Create personalized stewardship plans for top 50 donors',
              sampleData: { top100Total: 2568464, percentOfTotal: 89.94 }
            },
            {
              id: 'overall-3',
              name: 'Top 50% Donor Concentration Analysis',
              difficulty: 'yellow',
              dueDate: '2024-07-14',
              question: 'Is our fundraising becoming too dependent on a small group?',
              action: 'Develop strategies to broaden donor base',
              sampleData: { top50percent: 98.94, concentration: 'High' }
            }
          ]
        },
        {
          title: "Week 3: New Donor Foundation Analysis",
          role: "Annual Giving Manager, Database Manager",
          reports: [
            {
              id: 'new-donor-6',
              name: 'Annual First-Time Donor Analysis',
              difficulty: 'green',
              dueDate: '2024-07-19',
              question: 'How effective was our donor acquisition and retention outlook?',
              action: 'Set first-time donor retention goals and develop welcome series',
              sampleData: { newDonors: 286, avgFirstGift: 616, retentionRate: 23.73, completedDate: '2024-07-18' }
            },
            {
              id: 'new-donor-7',
              name: 'First Time Donor Month Rankings - All Donors',
              difficulty: 'yellow',
              dueDate: '2024-07-21',
              question: 'Which months produce our best new donors?',
              action: 'Optimize acquisition campaign timing',
              sampleData: { bestMonth: 'December', worstMonth: 'July', avgMonthly: 24 }
            }
          ]
        },
        {
          title: "Week 4: Major Donor Health Assessment",
          role: "Major Gifts Officers, Development Directors",
          reports: [
            {
              id: 'retention-5',
              name: 'Major Gift Conversion Prospects',
              difficulty: 'red',
              dueDate: '2024-07-26',
              question: 'Who are our best prospects for major gifts conversion?',
              action: 'Prioritize cultivation for High/Medium/Emerging prospects',
              sampleData: { highProspects: 30, mediumProspects: 11, emerging: 12, completedDate: '2024-07-25' }
            },
            {
              id: 'overall-11',
              name: 'New Top Level Donors Acquired Last Fiscal Year',
              difficulty: 'yellow',
              dueDate: '2024-07-28',
              question: 'Which new major donors need premium stewardship?',
              action: 'Develop enhanced stewardship plans',
              sampleData: { newMajorDonors: 7, totalValue: 174000, avgGift: 24857 }
            }
          ]
        }
      ]
    },
    1: {
      title: "Prospect Development & Pipeline Building",
      weeks: [
        {
          title: "Week 1-2: Comprehensive Prospect Identification",
          role: "Major Gifts Officer, Prospect Research",
          reports: [
            {
              id: 'actionable-7',
              name: 'Mid-Level Gift Prospect Identification',
              difficulty: 'red',
              dueDate: '2024-08-02',
              question: 'Which donors are ready for major gift conversations?',
              action: 'Create cultivation plans for Excellent and Good prospects',
              sampleData: { excellentProspects: 15, goodProspects: 28, avgCapacity: 50000 }
            },
            {
              id: 'actionable-1',
              name: 'Anniversary Report (11 Months Ago)',
              difficulty: 'green',
              dueDate: '2024-08-09',
              question: 'Which donors are approaching their giving anniversary?',
              action: 'Send personalized anniversary appeals and impact reports',
              sampleData: { anniversaryDonors: 47, totalValue: 892000, avgGift: 18978, completedDate: '2024-09-12' }
            }
          ]
        }
      ]
    },
    2: {
      title: "Early Warning Systems & Risk Mitigation",
      weeks: []
    }
  };

  const toggleReportCompletion = (reportId) => {
    const newCompleted = new Set(completedReports);
    const newDates = {...completionDates};
    
    if (newCompleted.has(reportId)) {
      newCompleted.delete(reportId);
      delete newDates[reportId];
    } else {
      newCompleted.add(reportId);
      newDates[reportId] = new Date().toISOString().split('T')[0];
    }
    
    setCompletedReports(newCompleted);
    setCompletionDates(newDates);
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(prev => {
      if (direction === 'next') {
        return prev === 11 ? 0 : prev + 1;
      } else {
        return prev === 0 ? 11 : prev - 1;
      }
    });
  };

  const getCurrentQuarter = () => {
    for (const [quarter, monthIndices] of Object.entries(quarters)) {
      if (monthIndices.includes(currentMonth)) {
        return quarter;
      }
    }
    return 'Q1';
  };

  const KPICard = ({ title, value, subtitle, trend, icon: Icon, color, format = 'number' }) => {
    const isPositive = trend > 0;
    const formatValue = (val) => {
      if (format === 'percentage') return `${val}%`;
      if (format === 'currency') return `$${val.toLocaleString()}`;
      return val.toLocaleString();
    };

    return (
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-white/20 hover:shadow-xl transition-all hover:bg-white/95">
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2 rounded-lg bg-${color}-100`}>
            <Icon className={`w-5 h-5 text-${color}-600`} />
          </div>
          <div className={`flex items-center text-xs ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {isPositive ? <TrendingUp className="w-3 h-3 mr-1" /> : <TrendingDown className="w-3 h-3 mr-1" />}
            {Math.abs(trend)}%
          </div>
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-gray-900">{formatValue(value)}</h3>
          <p className="text-sm font-medium text-gray-700">{title}</p>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
      </div>
    );
  };

  const ReportCard = ({ report, isCompleted, onToggle, onViewReport, completionDate }) => {
    const difficultyColors = {
      red: 'from-red-500 via-pink-500 to-red-600',
      yellow: 'from-orange-400 via-yellow-500 to-orange-600',
      green: 'from-green-400 via-emerald-500 to-green-600'
    };

    const difficultyLabels = {
      red: 'Advanced',
      yellow: 'Intermediate',
      green: 'Beginner'
    };

    const isOverdue = new Date(report.dueDate) < new Date() && !isCompleted;
    const isDueSoon = new Date(report.dueDate) <= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) && !isCompleted;

    return (
      <div className={`bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border-l-4 transition-all hover:shadow-xl border border-white/20 ${
        isCompleted ? 'border-green-500 bg-green-50/80' : 
        isOverdue ? 'border-red-500' : 
        isDueSoon ? 'border-yellow-500' : 'border-gray-300'
      }`}>
        <div className={`bg-gradient-to-r ${difficultyColors[report.difficulty]} text-white p-3 rounded-t-lg relative overflow-hidden`}>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full filter blur-xl transform translate-x-6 -translate-y-6"></div>
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white rounded-full filter blur-lg transform -translate-x-4 translate-y-4"></div>
          </div>
          <div className="flex justify-between items-center relative z-10">
            <h4 className="font-semibold text-sm">{report.name}</h4>
            <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded backdrop-blur-sm">
              {difficultyLabels[report.difficulty]}
            </span>
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className={`text-sm ${isOverdue ? 'text-red-600 font-semibold' : 'text-gray-600'}`}>
                Due: {new Date(report.dueDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              {isOverdue && <AlertTriangle className="w-4 h-4 text-red-500" />}
              {isDueSoon && !isOverdue && <Clock className="w-4 h-4 text-yellow-500" />}
            </div>
          </div>

          {isCompleted && completionDate && (
            <div className="flex items-center space-x-2 text-green-600 text-sm bg-green-50 p-2 rounded border border-green-200">
              <CheckCircle className="w-4 h-4" />
              <span>Completed on {new Date(completionDate).toLocaleDateString()}</span>
            </div>
          )}

          <div className="bg-yellow-50/80 backdrop-blur-sm p-3 rounded border-l-4 border-yellow-400">
            <p className="text-sm italic"><strong>Key Question:</strong> {report.question}</p>
          </div>

          <div className="bg-green-50/80 backdrop-blur-sm p-3 rounded border-l-4 border-green-400">
            <p className="text-sm"><strong>Action:</strong> {report.action}</p>
          </div>

          <div className="flex justify-between items-center pt-2">
            <button
              onClick={() => onToggle(report.id)}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all shadow-sm ${
                isCompleted 
                  ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 hover:from-green-200 hover:to-emerald-200 border border-green-200' 
                  : 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-700 hover:from-gray-200 hover:to-slate-200 border border-gray-200'
              }`}
            >
              <CheckCircle className={`w-4 h-4 ${isCompleted ? 'text-green-600' : 'text-gray-400'}`} />
              <span className="text-sm">{isCompleted ? 'Completed' : 'Mark Complete'}</span>
            </button>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => window.open('https://www.reportingxpress.com/xpress-insights/is-your-nonprofit-ready-for-revops', '_blank')}
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-lg hover:from-amber-200 hover:to-orange-200 transition-all border border-amber-200 shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">Resources</span>
              </button>

              <button
                onClick={() => onViewReport(report)}
                className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg hover:from-blue-200 hover:to-cyan-200 transition-all border border-blue-200 shadow-sm"
              >
                <Eye className="w-4 h-4" />
                <span className="text-sm">View Report</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const currentMonthData = reportsData[currentMonth] || { title: "Strategic Planning", weeks: [] };
  const totalReports = Object.values(reportsData).reduce((acc, month) => 
    acc + month.weeks.reduce((weekAcc, week) => weekAcc + week.reports.length, 0), 0
  );
  const completedCount = completedReports.size;
  const completionPercentage = totalReports > 0 ? (completedCount / totalReports * 100).toFixed(1) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden">
      {/* Watercolor Background Effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full filter blur-3xl transform translate-x-32 -translate-y-32"></div>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full filter blur-3xl transform -translate-x-32"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full filter blur-3xl transform translate-y-32"></div>
      </div>

      {/* Header */}
      <div className="relative bg-gradient-to-r from-purple-900 via-blue-900 to-blue-800 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Constituent Intelligence Dashboard</h1>
              <p className="text-blue-200">{customerData.organizationName} • FY2025 Strategic Roadmap</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-blue-200 mb-2">
                <User className="w-4 h-4" />
                <span className="text-sm">Last updated: {customerData.lastUpdated}</span>
              </div>
              <div className="text-sm text-blue-200 mb-1">
                Progress: {completedCount}/{totalReports} reports ({completionPercentage}%)
              </div>
              <div className="text-xs text-blue-300 italic">
                Powered by Reporting Xpress
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-6">
        {/* Compact KPI Dashboard */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <KPICard
            title="Percentage of CI Success Plan"
            value={customerData.kpis.percentageOfPlan.value}
            subtitle={`Target: ${customerData.kpis.percentageOfPlan.target}%`}
            trend={customerData.kpis.percentageOfPlan.trend}
            icon={Target}
            color="blue"
            format="percentage"
          />
          <KPICard
            title="Donor Retention Rate"
            value={customerData.kpis.donorRetention.value}
            subtitle={`Previous year: ${customerData.kpis.donorRetention.previousYear}%`}
            trend={customerData.kpis.donorRetention.trend}
            icon={Users}
            color="purple"
            format="percentage"
          />
          <KPICard
            title="Average Gift Growth"
            value={customerData.kpis.avgGiftGrowth.value}
            subtitle="vs same month last year"
            trend={customerData.kpis.avgGiftGrowth.trend}
            icon={DollarSign}
            color="cyan"
            format="percentage"
          />
          <KPICard
            title="Past Due Reports"
            value={customerData.kpis.pastDueReports.count}
            subtitle={`${customerData.kpis.pastDueReports.urgent} urgent`}
            trend={-25}
            icon={FileText}
            color="red"
          />
        </div>

        {/* Month Navigation */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 mb-6 border border-white/20">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth('prev')}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-lg hover:from-purple-200 hover:to-blue-200 transition-all shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Previous</span>
            </button>

            <div className="text-center">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">{months[currentMonth]} 2024</h2>
              <p className="text-gray-600">{getCurrentQuarter()} • {currentMonthData.title}</p>
            </div>

            <button
              onClick={() => navigateMonth('next')}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg hover:from-blue-200 hover:to-cyan-200 transition-all shadow-md"
            >
              <span>Next</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-500 shadow-sm"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 text-center">
            Overall Progress: {completedCount} of {totalReports} reports completed ({completionPercentage}%)
          </p>
        </div>

        {/* Weekly Reports */}
        <div className="space-y-6">
          {currentMonthData.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/20">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-4 border-b border-purple-200">
                <h3 className="text-lg font-semibold text-gray-900">{week.title}</h3>
                <p className="text-sm text-gray-600 mt-1">Primary Role: {week.role}</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {week.reports.map((report) => (
                    <ReportCard
                      key={report.id}
                      report={report}
                      isCompleted={completedReports.has(report.id)}
                      completionDate={completionDates[report.id]}
                      onToggle={toggleReportCompletion}
                      onViewReport={(report) => {
                        const demoUrl = "https://demo.reportingxpress.org/Share?ctx=Ikprngf_a4Gt-hLB8AyRPUW7mWHCUIiH-O1_WwJuskbUU9QgY-K-u-462njsc6TSZ3SCsT9dbgyxCeX__vaxWgFLKUVBkxjozOL7KCqAc1KjXd9HR7CKeQckgnU-Ntew6v-wxe7SneIUqCLR27MyHUijZ9UmgDwLJl2NT-8krTZZwInHJgal5H0T0-sv2iz3j0XkYvExAC-utGbKSrPcnJS9y3ndY1Lf1p7hJuUVIxE1xfvTZf-eN7LVFxlsrW79DN0z8GEh0qyjY4X0jUitUB12X_n7IjP1gn0GNKdlBLhS6f1lkUtkwAlvHtVBuOFjYQVA1KhbEwz1fj35wX38Aw";
                        window.open(demoUrl, '_blank');
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}

          {currentMonthData.weeks.length === 0 && (
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-12 text-center border border-white/20">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No reports scheduled</h3>
              <p className="text-gray-600">Check other months for your strategic roadmap activities.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
