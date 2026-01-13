function showGraph(container,options) {
  if ( Reveal.isReady() && container.clientHeight > 0 && container.clientWidth > 0 ) {
	container.style.left = 0;  
	container.style.right = 0;  
	container.style.top = 0;  
	container.style.bottom = 0;  
	var cy = cytoscape({
	  container: container,
	  layout: {
	    name: 'preset',
	    padding: 5
	  },
          style: [
            	{
	              selector: 'node',
        	      css: {
        	        'width': 20,
        	        'height': '20',
     			}
              
            	},
            	{
	              selector: 'node[label]',
        	      css: {
        	        'content': 'data(label)',
              		}
              
            	},
	        {
        	      selector: 'edge',
        	      css: {
        	        'curve-style': 'bezier',
        	        'target-arrow-shape': 'vee',
        	      }
        	},
	        {
        	      selector: 'edge[curve]',
        	      css: {
			'control-point-distance': 'data(curve)',
        	        'curve-style': 'unbundled-bezier',
        	      }
        	},
	        {
        	      selector: 'edge[label]',
        	      css: {
			'text-rotation': 'autorotate',
        	        'text-margin-y': '-10px',
        	        'content': 'data(label)',
        	      }
        	},
		{
                        selector: '.fade',
                        css: {
		        'background-color': 'lightgray',
		        'line-color': 'lightgray',
		        'target-arrow-color': 'lightgray',
                        }
                    },
	        {
        	      selector: '.highlight',
        	      css: {
		        'background-color': 'black',
		        'line-color': 'black',
		        'target-arrow-color': 'black',
        	      }
        	},
		{
		      selector: '.text',
		      css: {
		        'width': 1,
		        'height': 1,
		        'background-opacity': 0,
		        'border-width': 0,
		        'content': 'data(label)',
		        'text-opacity': 1,
		        'text-valign': 'center',
		        'text-halign': 'center'
		      }
		},
		{
		      selector: '.text-rotated',
		      css: {
		        'width': 1,
		        'height': 1,
		        'background-opacity': 0,
		        'border-width': 0,
		        'content': 'data(label)',
		        'text-opacity': 1,
		        'text-valign': 'center',
		        'text-halign': 'center',
		        'text-rotation': '90deg'
		      }
		},
		{
		      selector: ':selected',
		      css: {
		        'background-color': 'firebrick',
		        'line-color': 'firebrick',
		        'target-arrow-color': 'firebrick',
		        'source-arrow-color': 'firebrick'
		      }
		},
		],
		elements: options 
	});
	cy.selectionType( 'additive' );
	cy.userPanningEnabled( false );
	cy.nodes().ungrabify();

	// adjust positioning of cytoscape canvasses
	var elements = container.querySelectorAll("canvas");
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.left = 0;
	}
  }
  else {
	setTimeout( showGraph, 100, container, options );

  }
}

