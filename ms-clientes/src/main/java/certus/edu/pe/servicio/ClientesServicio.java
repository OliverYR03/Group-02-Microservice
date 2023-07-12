package certus.edu.pe.servicio;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import certus.edu.pe.modelo.Clientes;
import certus.edu.pe.repository.ClientesRepositorio;

@Service
@Transactional
public class ClientesServicio {

	@Autowired 
	private ClientesRepositorio ClientesRepositorio;
	
	public List<Clientes> buscarTodo() {
        return ClientesRepositorio.findAll();
    }
    
    public List<Clientes> geClientes() {
        return ClientesRepositorio.findAll();
    }
    
    

    public Clientes crear(Clientes Clientes) {
        return ClientesRepositorio.save(Clientes);
    }
	

	
	//Actualizar
	public Clientes actualizar(Clientes clienteActualizar) {
		Clientes clienteActual = ClientesRepositorio.findById(clienteActualizar.getIdclientes()).get();
		
		clienteActual.setIdclientes(clienteActualizar.getIdclientes());
		clienteActual.setNombre(clienteActualizar.getNombre());
		clienteActual.setDireccion(clienteActualizar.getDireccion());
		clienteActual.setNumero(clienteActualizar.getNumero());
		clienteActual.setCorreo(clienteActualizar.getCorreo());
		clienteActual.setTipopago(clienteActualizar.getTipopago());
		
		Clientes clienteActualizado = ClientesRepositorio.save(clienteActual);
		return clienteActualizado;
	}
	
	
	public Clientes buscarPorId(Integer id) {
		return ClientesRepositorio.findById(id).get();
	}
	
	public void borrarPorId(Integer id) {
		ClientesRepositorio.deleteById(id);
	}
	

	
}
