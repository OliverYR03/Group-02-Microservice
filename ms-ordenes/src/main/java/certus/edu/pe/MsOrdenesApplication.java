package certus.edu.pe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class MsOrdenesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MsOrdenesApplication.class, args);
	}

}
