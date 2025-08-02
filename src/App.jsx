import './App.css'
import { useState } from 'react'
import { Menu, X, ChevronRight, Building2, Target, Users, TrendingUp, Award, CheckCircle } from 'lucide-react'
import partnershipGrowthImg from './assets/octagon_partners_images/partnership_growth.png'
import visionStrategyImg from './assets/octagon_partners_images/vision_strategy.png'
import consultingImg from './assets/R0KaAgPumuZA.jpg'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">옥타콘파트너즈</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">홈</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">회사소개</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">사업소개</a>
              <a href="#vision" className="text-gray-700 hover:text-blue-600 transition-colors">비전</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">문의</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <nav className="flex flex-col space-y-2">
                <a href="#home" className="text-gray-700 hover:text-blue-600 py-2">홈</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 py-2">회사소개</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 py-2">사업소개</a>
                <a href="#vision" className="text-gray-700 hover:text-blue-600 py-2">비전</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 py-2">문의</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                기업 성장의 
                <span className="text-blue-600"> 파트너</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                언제나 고객을 먼저 생각하는 기업이 되겠습니다. 
                옥타콘파트너즈와 함께 성장의 새로운 길을 열어보세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                  상담 문의
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                  서비스 보기
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={partnershipGrowthImg} 
                alt="Partnership Growth" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">회사소개</h2>
            <p className="text-xl text-gray-600">국내 최고의 기업컨설팅 빅데이터를 보유한 전문 파트너</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={consultingImg} 
                alt="Business Consulting" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">고객의 성장이 곧 우리의 성장</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">분석 (Analyze)</h4>
                    <p className="text-gray-600">체계적인 데이터 분석을 통한 맞춤형 솔루션 제공</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">차별화 (Relationship)</h4>
                    <p className="text-gray-600">고객과의 신뢰 관계를 바탕으로 한 차별화된 서비스</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">소통 (Communication)</h4>
                    <p className="text-gray-600">투명하고 원활한 커뮤니케이션으로 최적의 결과 도출</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">결과 (Result)</h4>
                    <p className="text-gray-600">실질적이고 지속가능한 성과 창출</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">사업소개</h2>
            <p className="text-xl text-gray-600">전문적이고 체계적인 컨설팅 서비스를 제공합니다</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">정책자금</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 다양한 정책자금 기관의 주요 진행내용 파악</li>
                <li>• 기업별 맞춤 정책자금 상품 및 특성 분석</li>
                <li>• 추가 정책자금 진행시 기업 상황 분석</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">정부지원금</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 신규채용 인력에 대한 정부 무상지원금 체크</li>
                <li>• 기업 사내 직원 훈련지원금 제도 체크</li>
                <li>• 기업별 맞춤 무상 지원금 및 R&D</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">제도정비</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 최근 이슈화 되는 인사제도 방어에 대한 가이드</li>
                <li>• 법인에 반드시 필요한 정관 행정 제도 분석</li>
                <li>• 5대법정의무 교육 진행방법 안내</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">기업인증 및 연구소 설립</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• 개인/법인 모두 받을 수 있는 기업인증 안내</li>
                <li>• 기업인증을 활용한 정책자금 진행 방법</li>
                <li>• 연구소를 활용한 다양한 정부혜택</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">비전 및 목표</h2>
            <p className="text-xl text-gray-600">국내 최고의 기업컨설팅 빅데이터 보유</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">VISION</h3>
                <p className="text-2xl text-blue-600 font-semibold mb-8">고객의 성장이 곧 우리의 성장</p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  언제나 고객을 먼저 생각하는 기업이 되겠습니다. 
                  체계적인 분석과 차별화된 서비스, 원활한 소통을 통해 
                  실질적인 결과를 만들어내는 것이 우리의 목표입니다.
                </p>
              </div>
            </div>
            <div>
              <img 
                src={visionStrategyImg} 
                alt="Vision and Strategy" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">문의하기</h2>
            <p className="text-xl text-gray-300">전문 컨설팅 서비스에 대해 궁금한 점이 있으시면 언제든 연락주세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg">전화번호</h4>
                  <p className="text-gray-300">02-1234-5678</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">이메일</h4>
                  <p className="text-gray-300">info@octagonpartners.co.kr</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">주소</h4>
                  <p className="text-gray-300">서울특별시 강남구 테헤란로 123</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">운영시간</h4>
                  <p className="text-gray-300">평일 09:00 - 18:00</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">상담 문의</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">회사명</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="회사명을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">담당자명</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="담당자명을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">연락처</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="연락처를 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">문의내용</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="문의내용을 입력하세요"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  문의 보내기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">옥타콘파트너즈</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 옥타콘파트너즈. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

