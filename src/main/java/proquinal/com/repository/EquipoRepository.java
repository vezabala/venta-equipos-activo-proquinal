package proquinal.com.repository;

import proquinal.com.domain.Equipo;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Equipo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EquipoRepository extends JpaRepository<Equipo, Long> {
}
