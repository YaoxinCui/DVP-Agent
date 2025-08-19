import React, { useState, useRef, useEffect } from 'react';
import '../styles/Dropdown.css'; // 引入样式文件

const Dropdown: React.FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownContainerRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownContainerRef.current &&
      !dropdownContainerRef.current.contains(event.target as Node)
    ) {
      setIsDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownContainerRef} className="dropdown-container">
      <label htmlFor="model-select" className="dropdown-label" onClick={toggleDropdown}>
        动力驱动AI Agent:
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M6 8l6 6 6-6" fill="none" stroke="#ccc" strokeWidth="2" />
        </svg>
      </label>
      {isDropdownVisible && (
        <div className="custom-dropdown">
          <div
            className="custom-dropdown-item"
            onClick={() => (window.location.href = 'http://10.245.85.112:8001/')}
          >
            <i className="icon">🔧</i> 智能电机绕组设计Agent
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => (window.location.href = 'https://powertrain-data-analysis-agent-test.inner.chj.cloud/')}
          >
            <i className="icon">📊</i> 动力驱动数据分析Agent
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => (window.location.reload())}
          >
            <i className="icon">⚙️</i> DVP设计Agent
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => (window.location.href = '#')}
          >
            <i className="icon">🔬</i> 仿真开发Agent (开发中)
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => (window.location.href = '#')}
          >
            <i className="icon">💡</i> 电路设计Agent (开发中)
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => (window.location.href = '#')}
          >
            <i className="icon">💻</i> 软件代码Agent (开发中)
          </div>
          <div
            className="custom-dropdown-item"
            onClick={() => (window.location.href = '#')}
          >
            <i className="icon">🔍</i> 生产质检Agent (开发中)
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
