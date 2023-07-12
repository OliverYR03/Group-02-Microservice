package certus.edu.pe.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import certus.edu.pe.exceptions.ResourceNotFoundException;
import certus.edu.pe.modelo.Clientes;
import certus.edu.pe.repository.ClientesRepositorio;


@RestController
@RequestMapping("/api")
public class ClientesController {

	@Autowired
	private ClientesRepositorio clientesRepository;
	
	@GetMapping("/listar")
	public List<Clientes> getAllClientes() 
	{
        return clientesRepository.findAll();
    }
	
	@GetMapping("/listar/{id}")
	public ResponseEntity<Clientes> getClientesId(@PathVariable (value = "id") Integer clientesId)
	throws ResourceNotFoundException {
		
		Clientes clientes = clientesRepository.findById(clientesId).orElseThrow(() ->
		new ResourceNotFoundException("Cliente not found for this id : :" + clientesId));
		return ResponseEntity.ok(clientes);
	}
	
	@PostMapping("listar")
	public Clientes createCliente(@Validated @RequestBody Clientes clientes) {
		return clientesRepository.save(clientes);
	}
	
	@PutMapping("/listar/{id}")
	public ResponseEntity <Clientes> updateCliente(@PathVariable(value = "id") Integer clientesId,
	@Validated @RequestBody Clientes clientesDetails) throws ResourceNotFoundException{
	Clientes clientes = clientesRepository.findById(clientesId)
	.orElseThrow(() -> new ResourceNotFoundException("Este cliente no se ha podido ubicar : : " + clientesId));
	
	
	clientes.setNombre(clientesDetails.getNombre());
	clientes.setDireccion(clientesDetails.getDireccion());
	clientes.setNumero(clientesDetails.getNumero());
	clientes.setCorreo(clientesDetails.getCorreo());
	clientes.setTipopago(clientesDetails.getTipopago());
	
	
	final Clientes updateCliente = clientesRepository.save(clientes);
	return ResponseEntity.ok(updateCliente);
	}
	
	@DeleteMapping("/listar/{id}")
	public Map<String, Boolean> deleteCliente (@PathVariable (value = "id") Integer clientesId)
			throws ResourceNotFoundException{
		Clientes clientes = clientesRepository.findById(clientesId)
					.orElseThrow(() -> new ResourceNotFoundException("Cliente not found for this id : :" + clientesId));
			clientesRepository.delete(clientes);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return response;
	}
}
