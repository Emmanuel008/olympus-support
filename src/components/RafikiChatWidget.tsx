'use client';

import { useEffect } from 'react';

// TypeScript declarations for RafikiChat
declare global {
  interface Window {
    RafikiChat?: {
      init: (config: any) => void;
    };
  }
}

export default function RafikiChatWidget() {
  useEffect(() => {
    // Configuration
    const widgetConfig = {
      apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhaUlkIjoiMTc2OTAyMTAwNTA2OS02MWMxMTdlMSIsInVzZXJJZCI6IjE3NjkwMjA3ODYwNTYtZTRiNWMyMzAiLCJ0eXBlIjoid2lkZ2V0IiwiaWF0IjoxNzY5MDIxMDA3LCJleHAiOjE4MDA1NTcwMDd9.vgEc3nFr7fhWHAF7lYwsfncKB9NgRRX5TfsjmpBKXLo',
      assistantId: '1769021005069-61c117e1',
      apiEndpoint: 'https://rafikiaicompany.com',
      autoFetchConfig: true,
      autoRefreshInterval: 0,
      fallbackConfig: {
        title: 'Olympus Assistant',
        subtitle: 'Olympus Support Solution is a professional logistics,insuarance brokerage  and fuel supply',
        welcomeMessage: 'Hello! How can I assist you today?',
        logoUrl: '',
        primaryColor: '#4f46e5',
        position: 'bottom-right',
        showBranding: true,
        allowTranscript: true,
        allowAttachments: false
      },
      debug: true
    };
    
    // Function to initialize widget
    function initRafikiWidget() {
      // Check if RafikiChat is already available (script already loaded)
      if (window.RafikiChat && typeof window.RafikiChat.init === 'function') {
        // Script already loaded, initialize immediately
        try {
          window.RafikiChat.init(widgetConfig);
        } catch (error) {
          console.error('Rafiki Chat Widget: Initialization error', error);
        }
        return;
      }
      
      // Check if script is already being loaded
      const existingScript = document.querySelector('script[src*="chat-widget.js"]');
      if (existingScript) {
        // Script is already being loaded, wait for it and then initialize
        const checkInterval = setInterval(function() {
          if (window.RafikiChat && typeof window.RafikiChat.init === 'function') {
            clearInterval(checkInterval);
            try {
              window.RafikiChat.init(widgetConfig);
            } catch (error) {
              console.error('Rafiki Chat Widget: Initialization error', error);
            }
          }
        }, 100);
        
        // Stop checking after 10 seconds
        setTimeout(function() {
          clearInterval(checkInterval);
        }, 10000);
        return;
      }
      
      // Script not loaded yet, load it now
      const script = document.createElement('script');
      var cacheBuster = Date.now();
      script.src = 'https://rafikiaicompany.com/widget/chat-widget.js?v=latest&t=' + cacheBuster;
      script.async = true;
      script.defer = true;
      
      // Retry counter
      let retryCount = 0;
      const maxRetries = 10;
      
      function tryInit() {
        if (window.RafikiChat && typeof window.RafikiChat.init === 'function') {
          try {
            console.log('Rafiki Chat Widget: Initializing...');
            window.RafikiChat.init(widgetConfig);
            console.log('Rafiki Chat Widget: Initialized successfully');
          } catch (error) {
            console.error('Rafiki Chat Widget: Initialization error', error);
          }
        } else if (retryCount < maxRetries) {
          retryCount++;
          console.log('Rafiki Chat Widget: Waiting for RafikiChat to be available... Attempt ' + retryCount);
          setTimeout(tryInit, 200);
        } else {
          console.error('Rafiki Chat Widget: Failed to initialize after ' + maxRetries + ' attempts.');
          console.error('Please ensure the embed code is added to a SHARED template that loads on every page.');
          console.error('Current window.RafikiChat:', window.RafikiChat);
        }
      }
      
      script.onload = function() {
        console.log('Rafiki Chat Widget: Script loaded successfully');
        // Wait a bit for RafikiChat to be available
        setTimeout(tryInit, 100);
      };
      
      script.onerror = function() {
        console.error('Rafiki Chat Widget: Failed to load script from https://rafikiaicompany.com/widget/chat-widget.js');
        console.error('Please check:');
        console.error('1. The script URL is correct');
        console.error('2. Your server allows loading scripts from this domain');
        console.error('3. There are no CORS or network errors');
        console.error('4. The embed code is added to a SHARED template (header/footer) that loads on every page');
      };
      
      // Append to head or body
      if (document.head) {
        document.head.appendChild(script);
      } else if (document.body) {
        document.body.appendChild(script);
      } else {
        // Wait for DOM
        document.addEventListener('DOMContentLoaded', function() {
          if (document.head) {
            document.head.appendChild(script);
          } else if (document.body) {
            document.body.appendChild(script);
          }
        });
      }
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initRafikiWidget);
    } else {
      // DOM is already ready
      console.log('Rafiki Chat Widget: DOM ready, initializing...');
      initRafikiWidget();
    }
    
    // Cleanup function
    return () => {
      console.log('Rafiki Chat Widget: Component unmounted');
    };
  }, []);

  return null;
}
