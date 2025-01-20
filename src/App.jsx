import React from 'react';

    function App() {
      const competencyAreas = [
        {
          title: 'Audio Podcast: AMCF Overview',
          description: 'Listen to an overview of the Asset Management Competency Framework.',
          resources: [
            {
              name: 'Listen to Podcast',
              url: 'https://notebooklm.google.com/notebook/bc806b0a-b5d3-4bde-a1ca-9396119fd40c/audio',
            },
          ],
        },
        {
          title: 'Interactive Voice Assistant: AMCF',
          description: 'Use a voice assistant to learn about the Asset Management Competency Framework.',
          resources: [
            {
              name: 'Launch Voice Assistant',
              url: 'https://vapi.ai/?demo=true&shareKey=e405167c-c73a-42ca-8c5e-47e70f0aff47&assistantId=9400738e-7a14-40e5-9ec3-e1ded294071c',
            },
          ],
        },
        {
          title: 'Asset Management Policy and Strategy',
          description: 'Developing and implementing asset management policies and strategies.',
          resources: [
            {
              name: 'Municipal Asset Management Program',
              url: 'https://fcm.ca/en/programs/municipal-asset-management-program',
            },
          ],
        },
        {
          title: 'Asset Management Planning',
          description: 'Creating and maintaining asset management plans.',
          resources: [
            {
              name: 'Asset management readiness scale',
              url: 'https://fcm.ca/en/programs/green-municipal-fund/tools/asset-management-readiness-scale',
            },
          ],
        },
        {
          title: 'Data and Information Management',
          description: 'Collecting, managing, and using asset data.',
          resources: [],
        },
        {
          title: 'Financial Management',
          description: 'Integrating asset management into financial planning.',
          resources: [],
        },
        {
          title: 'Risk Management',
          description: 'Identifying and managing risks related to assets.',
          resources: [],
        },
        {
          title: 'Performance Management',
          description: 'Monitoring and evaluating asset performance.',
          resources: [],
        },
        {
          title: 'People and Leadership',
          description: 'Building capacity and leadership in asset management.',
          resources: [
            {
              name: 'CNAM AM Competency Framework',
              url: 'https://cnam.ca/wp-content/uploads/2021/11/CNAM_AM-Competency-Framework_2020_WEB.pdf',
            },
          ],
        },
      ];

      return (
        <div className="container">
          <header>
            <h1>Asset Management Best Practices</h1>
          </header>
          <div className="search-bar">
            <input type="text" placeholder="Search by competency..." />
          </div>
          <div className="competency-grid">
            {competencyAreas.map((area, index) => (
              <div key={index} className="competency-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                {area.resources.length > 0 && (
                  <ul>
                    {area.resources.map((resource, resIndex) => (
                      <li key={resIndex}>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer">
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default App;
